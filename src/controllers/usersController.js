const userService = require("../services/userService");


const usersController = {
	login: function (req, res) {
		res.render("login");
	},

	register: function (req, res) {
		res.render("register");
	},

	processRegister: userService.procesRegister, 
		
	};


module.exports = usersController;
