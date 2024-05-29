const { validationResult } = require("express-validator");
const userService = require("../services/userService");
const bcryptjs = require("bcryptjs");
const User = require("../database/models/User.js");

const usersController = {
	login: function (req, res) {
		res.render("login");
	},

	loginProcess: async function (req, res) {
		await userService.loginProcess(req, res);
		if (req.body.remember_user) {
			res.cookie("userName", req.body.name, { maxAge: 1000 * 10 });
		}
	},

	register: function (req, res) {
		res.render("register");
	},

	processRegister: async function (req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log("Validation failed:", errors.mapped());
			return res.render("register", { errors: errors.mapped(), oldData: req.body });
		}

		try {
			let userToCreate = {
				...req.body,
				password: bcryptjs.hashSync(req.body.password, 10),
				image: req.file.filename,
			};

			await User.create(userToCreate);
			return res.redirect("/");
		} catch (error) {
			console.error("Error during user registration:", error);
			return res.status(500).send("Error interno del servidor");
		}
	},

	profile: function (req, res) {
		res.render("profile", { user: req.session.userLogged });
	},

	logout: function (req, res) {
		res.clearCookie("userName");
		req.session.destroy();
		return res.redirect("/");
	},
};

module.exports = usersController;
