const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const CategoryInstrument = db.define(
	"categories_instruments",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		timestamps: false,
	}
);

module.exports = CategoryInstrument;
