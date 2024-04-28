const session = require("express-session");
const userService = require("../services/userService");
const { body } = require('express-validator');

const usersController = {
	login: function (req, res) {
		res.render("login");
	},
    loginProcess:function (req, res){
		let user = userService.loginProcess(req,res);
		return res.redirect('/users/profile');
	},
	register: function (req, res) {
		res.render("register");
	},
	processRegister: function (req, res) {
		    userService.validateOneComplete(req,res);
			return res.redirect("/");
		
	},
	profile:function (req, res) {
		res.render('profile', {user:req.session.userLogged})
	},
	logout: function(req,res){
		req.session.destroy();
		return res.redirect('/')
	}
}
module.exports = usersController;
