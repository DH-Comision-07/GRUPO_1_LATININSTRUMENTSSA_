const userService = require("../services/userService");
const { body } = require('express-validator');

const usersController = {
	login: function (req, res) {
		res.render("login");
	},

	register: function (req, res) {
		res.render("register");
	},

	processRegister: function (req, res) {
		    userService.validateOneComplete(req,res);
			return res.redirect("/");
		
	},
};

module.exports = usersController;
