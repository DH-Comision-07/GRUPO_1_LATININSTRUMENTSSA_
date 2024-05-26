const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const User = db.define(
	"users",
	{
		role: {
			type: DataTypes.ENUM("admin", "customer"),
			allowNull: false,
			defaultValue: "customer",
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.TEXT,
		},
	}
);

User.associate = function(models){

	User.hasMany(models.Shopping_cart, {
		foreingKey: 'user_id', 
		as: 'carritos'
	})
}

module.exports = User;
