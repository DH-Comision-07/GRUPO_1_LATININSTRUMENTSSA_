const Producto = require("./Producto");

module.exports = (sequelize, DataTypes)=>{

    let alias = 'ProductosCategoriasVin';
    let cols = {
        product_id: {
            type: DataTypes.INTEGER, 
            alloNull: false,
            references: { 
                model: Producto,
                key: 'id'
            }


        }, 
        category_vinyl_id: {

            type: DataTypes.INTEGER, 
            alloNull: false,
            references: { 
                model: CategoriaVinilo,
                key: 'id'
            }

            
            
        },
    };
    let config = {
        tableName: 'product_category_vinyl',
        
    };


    let ProductoCategoriaVin = sequelize.define(alias, cols, config);

    return ProductoCategoriaVin;

}