const { DataTypes } = require("sequelize");
const db = require("../config/db.js");
const Brand = require("./Brand")

const Product = db.define(
	"products",
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
                model: Brand,
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
        Product.belongsToMany( models.category_vinyl, {
            as: 'vinyls', 
            through: 'product_category_vinyl',
            foreingKey: 'category_vinyl_id',
            otherKey: 'product_id', 
            timeStamps: false
        })
        Product.belongsToMany( models.category_instrument, {
            as: 'instruments', 
            through: 'product_category_instrument',
            foreingKey: 'category_instrument_id',
            otherKey: 'product_id', 
            timeStamps: false
        })
        Product.hasMany( models.Shopping_cart, {
            as:'carts',
            foreingKey: 'product_id', 
        })


    };

   module.exports = Product


