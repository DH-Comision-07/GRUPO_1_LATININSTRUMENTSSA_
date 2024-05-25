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
        
    Carrito.associate = function(models){
        Carrito.belongsTo( models.Productos, {
            as:'producto',
            foreingKey: 'product_id', 
        })
        Carrito.belongsTo( models.Usuarios, {
            as:'usuario',
            foreingKey: 'user_id', 
        })

        

    }


    return Carrito;

}