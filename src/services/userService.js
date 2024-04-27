const { validationResult } = require("express-validator");
const { body } = require('express-validator');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const fs = require('fs')

const userService = {

	fileName: './src/data/usersDataBase.json',

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
	loginProcess: function (req, res){
		const validUser = userService.validateOne(req);

		if (validUser.errors) {
			return res.render("login", validUser);
		} else {	
			return { }
		}
	}
}

module.exports = userService;
