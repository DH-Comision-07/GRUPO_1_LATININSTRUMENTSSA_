const userService = require("../services/userService");

const usersController = {
	login : function(req,res){
		res.render('login')
	},

	register : function (req,res){
		res.render('register')
	},
	processRegister:function (req,res){
		const validUser =userService.validateOne(req);
		if (validUser.errors){
        return res.render('register', validUser)}
		return res.redirect('/')	
	}
}

module.exports = usersController;
