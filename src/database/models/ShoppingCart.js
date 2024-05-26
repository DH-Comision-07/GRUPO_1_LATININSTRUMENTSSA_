const db = require("../config/db.js");
const { DataTypes } = require("sequelize");

const Shopping_cart = db.define(

    "shopping_cart",
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario,
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Producto,
                key: 'id'
            }
        },
        quantity: DataTypes.INTEGER,
    },

    Shopping_cart.associate = function (models) {
        Shopping_cart.belongsTo(models.Products, {
            as: 'product',
            foreingKey: 'product_id',
        })
        Shopping_cart.belongsTo(models.Users, {
            as: 'usuario',
            foreingKey: 'user_id',
        })



    }

);
module.exports = Shopping_cart;
