const { DataTypes } = require("sequelize");
const db = require("../config/db.js");
const Product = require("./Product.js");
const CategoryInstrument = require("./CategoryInstrument.js");

const ProductCategoryInstrument = db.define(
	"product_category_instrument",
	{
		product_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Product,
				key: "id",
			},
		},
		category_instrument_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: CategoryInstrument,
				key: "id",
			},
		},
	},
	{
		timestamps: false,
	}
);

ProductCategoryInstrument.belongsTo(Product, { foreignKey: "product_id" });
ProductCategoryInstrument.belongsTo(CategoryInstrument, { foreignKey: "category_instrument_id" });

module.exports = ProductCategoryInstrument;
