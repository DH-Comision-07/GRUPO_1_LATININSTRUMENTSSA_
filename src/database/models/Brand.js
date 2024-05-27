const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Brand = db.define(
  "brands",
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


module.exports = Brand;

