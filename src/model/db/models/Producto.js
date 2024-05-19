module.exports = (sequelize, DataTypes)=>{

    let alias = 'Productos';
    let cols = {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true,
            alloNull: false,


        }, 
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
    };
    let config = {
        tableName: 'products',
        timeStamps: false
    };


    let Producto = sequelize.define(alias, cols, config);

    return Producto;

}