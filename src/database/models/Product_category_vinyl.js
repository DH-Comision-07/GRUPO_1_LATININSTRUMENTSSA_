const db = require("../config/db.js");
const { DataTypes } = require("sequelize");


const Product_category_vinyl = db.define(

    product_category_vinyl,
    {
        name: {
            type: DataTypes.STRING(100)            
        }
    }
    )


    Product_category_vinyl.associate = function(models){
        
        Product_category_vinyl.belongsToMany( models.Products, {
        as: 'productos', 
        through: 'product_category_vinyl',
        foreingKey: 'product_id ',
        otherKey: 'category_vinyl_id', 
        timeStamps: false
    })
    };

module.exports = Product_category_vinyl