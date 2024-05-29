const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const CategoryVinyl = db.define(
	"categories_vinyls",
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

module.exports = CategoryVinyl;
