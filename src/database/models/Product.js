const { DataTypes } = require("sequelize");
const db = require("../config/db.js");
const brand = require('./Brand.js')

const Product = db.define(
	"product",
    {
        name: {
            type: DataTypes.STRING(100),
            alloNull: false, 
        },
        description: DataTypes.TEXT,

        category: {
            type: DataTypes.ENUM('instrument', 'vinyl'),
            alloNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            alloNull: false,
        },
        image: DataTypes.STRING(255),
        
        brand_id: { 
            type: DataTypes.INTEGER,
            references: { 
                model: brand,
                key: 'id'
            }
        }
    },

);
    Product.associate = function(models){
        Product.belongsTo( models.Brand, {
            as:'brands',
            foreingKey: 'brand_id', 
        })
        Product.belongsToMany( models.Product_category_vinyls, {
            as: 'vinyls', 
            through: 'product_category_vinyl',
            foreingKey: 'category_vinyl_id',
            otherKey: 'product_id', 
            timeStamps: false
        })
        Product.belongsToMany( models.Product_category_instruments, {
            as: 'instruments', 
            through: 'product_category_instrument',
            foreingKey: 'category_instrument_id',
            otherKey: 'product_id', 
            timeStamps: false
        })
        Product.hasMany( models.Carritos, {
            as:'carts',
            foreingKey: 'product_id', 
        })


    }

module.exports = Product


