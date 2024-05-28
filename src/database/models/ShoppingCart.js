const { DataTypes } = require("sequelize");
const db = require("../config/db.js");
const User = require("./User.js");
const Product = require("./Product.js");

const ShoppingCart = db.define(
	"shopping_cart",
	{
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: "id",
			},
		},
		product_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Product,
				key: "id",
			},
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

ShoppingCart.belongsTo(User, { foreignKey: "user_id" });
ShoppingCart.belongsTo(Product, { foreignKey: "product_id" });

module.exports = ShoppingCart;
