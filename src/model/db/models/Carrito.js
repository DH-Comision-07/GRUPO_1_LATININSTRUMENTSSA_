module.exports = (sequelize, DataTypes)=>{

    let alias = 'Carritos';
    let cols = {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true,
            alloNull: false,


        }, 
    
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
    };
    let config = {
        tableName: 'shopping_cart',
        timeStamps: false
    };


    let Carrito = sequelize.define(alias, cols, config);

    return Carrito;

}