const db = require("../config/db.js");
const { DataTypes } = require("sequelize");


const Product_category_instrument = db.define(
    
    product_category_instrument,
    {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true,
            alloNull: false,


        }, 
        name: {
            type: DataTypes.STRING(100),
            
        },
    }
)

Product_category_instrument.associate = function(models){
        
    Product_category_instrument.belongsToMany( models.Productos, {
        as: 'productos', 
        through: 'product_category_instrument',
        foreingKey: 'product_id',
        otherKey: 'category_instrument_id', 
        timeStamps: false
    })
    };


module.exports = Product_category_instrument