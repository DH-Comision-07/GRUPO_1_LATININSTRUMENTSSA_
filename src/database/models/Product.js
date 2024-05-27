const { DataTypes } = require("sequelize");
const db = require("../config/db.js");
const Brand = require("./Brand.js");
const CategoryInstrument = require("./CategoryInstrument.js");
const CategoryVinyl = require("./CategoryVinyl.js");

const Product = db.define(
	"products",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
		},
		category: {
			type: DataTypes.ENUM("instrument", "vinyl"),
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
		},
		brand_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Brand,
				key: "id",
			},
		},
	},
	{
		timestamps: false,
	}
);

Product.belongsTo(Brand, { foreignKey: "brand_id" });
Product.belongsToMany(CategoryInstrument, { through: "product_category_instrument", foreignKey: "product_id" });
Product.belongsToMany(CategoryVinyl, { through: "product_category_vinyl", foreignKey: "product_id" });

module.exports = Product;
