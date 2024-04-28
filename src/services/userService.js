const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcryptjs = require('bcryptjs');
const { body } = require('express-validator');


const fs= require('fs')

const userService = {
    
    fileName: './src/data/usersDataBase.json',

    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function (){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
        return lastUser.id +1;
        }else{
            return 1;
        }
    },

    findAll: function (){
      return this.getData();
 
    },

    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneField => oneField[field] === text);
        return userFound;
    },

    create : function (userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers,null, ' '))
        return true;
    },

    delete: function (id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers,null, ' '))
        return true;
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
    procesRegister: function (req, res) {
		const validUser = userService.validateOne(req);

		if (validUser.errors) {
			return res.render("register", validUser);
			
		} else {
			let userInDB= User.findByField('email', req.body.email);
				if(userInDB){
					return res.render('register', {
						errors: {
							email:{
								msg: 'este email ya esta registrado'

							}
						},
						oldData: req.body
					}
				);
				}

			}
	


			let userToCreate = {
				...req.body,
				password: bcryptjs.hashSync(req.body.password[0], 10), 
				image: req.file.filename
			}
			
			User.create(userToCreate);
			return res.redirect("/");
		}
    
};

module.exports = userService;
