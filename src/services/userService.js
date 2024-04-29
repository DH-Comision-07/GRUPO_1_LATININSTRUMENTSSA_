const { validationResult } = require("express-validator");

const { body } = require('express-validator');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const fs = require('fs');
const { name } = require("ejs");
const { log } = require("console");

const userService = {

	fileName: './src/data/usersDataBase.json',
	getAllUsers: () => {
		const users = JSON.parse(fs.readFileSync(userService.fileName, "utf-8"));
		return users
	  },
	getUsersById: (userId) => {
		const users = userService.getAllUsers();
		return users.find((user) => user.id == userId);
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
	validateOneComplete: function (req, res) {
		const validUser = userService.validateOne(req);
		if (validUser.errors) {
			return res.render("register", validUser);
		} else {

			let userInDB = User.findByField('email', req.body.email);
			if (userInDB) {
				return res.render('register', {
					errors: {
						email: {
							msg: 'Este email ya está registrado'
						}
					},
					oldData: req.body
				});
			};
			let userToCreate = {

				...req.body,
				password: bcryptjs.hashSync(req.body.password[0], 10),
				image: req.file.filename
			};
			User.create(userToCreate);

		}
	},
	loginProcess: function (req, res) {

		const validUser = userService.validateOne(req);
		//me fijo si tiene errores
		if (validUser.errors) {
			return res.render("login", validUser);
		} else {
			let userToLogin = User.findByField('name', req.body.name);
			if (userToLogin) { //veo si existe
				let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
					if(!isOkThePassword){ //veo si es correcta la contraseña en caso de que exista
						return res.render('login', {
							errors: {
								password: {
									msg: 'Contraseña incorrecta'
								}
							}
						})
					}else{ //si existe y es correcta la contraseña, voy al perfil
					 delete userToLogin.password; //borro pass por seguridad
					 req.session.userLogged = userToLogin;
					//  const user = User.findByField('name', userToLogin.name);
					 return req.session.userLogged;
					}
				} else { //si no existe, aviso
					return res.render('login', {
						errors: {
							name: {
								msg: 'Este usuario no se encuentra registrado'
							}
						}
				})
			}
		}
	}
}


module.exports = userService;
