const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Brand =db.define(
       "brands",
       {
        name: {
            type: DataTypes.STRING(100),
            alloNull: false, 
        },
    }
)

Brand.associate = function(models){

    Marca.hasMany(models.Products, {
        foreingKey: 'brand_id', 
        as: 'productos'
    })

}

module.exports = Brand