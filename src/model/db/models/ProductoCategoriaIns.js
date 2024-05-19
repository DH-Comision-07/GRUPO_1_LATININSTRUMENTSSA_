const Producto = require("./Producto");

module.exports = (sequelize, DataTypes)=>{

    let alias = 'ProductosCategoriasins';
    let cols = {
        product_id: {
            type: DataTypes.INTEGER, 
            alloNull: false,
            references: { 
                model: Producto,
                key: 'id'
            }


        }, 
      category_instrument_id: {

            type: DataTypes.INTEGER, 
            alloNull: false,
            references: { 
                model: CategoriaInstrumento,
                key: 'id'
            }

            
            
        },
    };
    let config = {
        tableName: 'product_category_instrument',
        
    };


    let ProductoCategoriaIns = sequelize.define(alias, cols, config);

    return ProductoCategoriaIns;

}