const userService = require("../services/userService");
const { body } = require('express-validator');

const usersController = {
	login: function (req, res) {
		res.render("login");
	},
    loginProcess:function (req, res){
		let user = userService.loginProcess(req,res)
		return res.render("profile", {user:user});
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
