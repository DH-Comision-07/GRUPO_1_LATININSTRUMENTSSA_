const { DataTypes } = require("sequelize");
const db = require("../config/db.js");
const Product = require("./Product.js");
const CategoryVinyl = require("./CategoryVinyl.js");

const ProductCategoryVinyl = db.define(
	"product_category_vinyl",
	{
		product_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Product,
				key: "id",
			},
		},
		category_vinyl_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: CategoryVinyl,
				key: "id",
			},
		},
	},
	{
		timestamps: false,
	}
);

ProductCategoryVinyl.belongsTo(Product, { foreignKey: "product_id" });
ProductCategoryVinyl.belongsTo(CategoryVinyl, { foreignKey: "category_vinyl_id" });

module.exports = ProductCategoryVinyl;
