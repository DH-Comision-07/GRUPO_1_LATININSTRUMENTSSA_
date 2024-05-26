const { validationResult } = require("express-validator");
const { body } = require('express-validator');
const User = require('../database/models/User');
const bcryptjs = require('bcryptjs');


const userService = {
	getAllUsers: async () => {
		return await User.findAll();
	},

	getUsersById: async (id) => {
		return await User.findByPk(id);
	},

	validateOne: (fromUser) => {
		const resultValidation = validationResult(fromUser);
		if (resultValidation.errors.length > 0) {
			return {
				errors: resultValidation.mapped(),
				oldData: fromUser.body,
			};
		} else {
			return {};
		}
	},

	validateOneComplete: async (req, res) => {
		const validUser = userService.validateOne(req);
		if (validUser.errors) {
			return { success: false, errors: validUser.errors };
		} else {
			let userInDB = await User.findOne({ where: { email: req.body.email } });
			if (userInDB) {
				return { success: false, errors: { email: { msg: "Este email ya está registrado" } }, oldData: req.body };
			}

			return { success: true };
		}
	},

	loginProcess: async (req, res) => {
		const validUser = userService.validateOne(req);
		if (validUser.errors) {
			return res.render("login", validUser);
		} else {
			let userToLogin = await User.findOne({ where: { name: req.body.name } });
			if (userToLogin) {
				let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
				if (!isOkThePassword) {
					return res.render("login", {
						errors: {
							password: {
								msg: "Contraseña incorrecta",
							},
						},
					});
				} else {
					// Asigna el usuario a la sesión
					req.session.userLogged = userToLogin;
					// Redirige al usuario al perfil o a otra página
					return res.redirect("/users/profile");
				}
			} else {
				return res.render("login", {
					errors: {
						name: {
							msg: "Este usuario no se encuentra registrado",
						},
					},
				});
			}
		}
	},
};


module.exports = userService;
