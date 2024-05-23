module.exports = (sequelize, DataTypes)=>{

    let alias = 'Usuarios';
    let cols = {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true,
            alloNull: false,


        }, 
        role: {
            type: DataTypes.ENUM('admin', 'customer'),
            alloNull: false,
        },
        name: {
            type: DataTypes.STRING(100),
            alloNull: false, 
        },
        email:{
            type: DataTypes.STRING(100),
            alloNull: false, 
            unique: true,
        },
        password:{
            type: DataTypes.STRING(255),
            alloNull: false,
        },
        image: DataTypes.STRING(255),

        description: DataTypes.TEXT,

       
    };
    let config = {
        tableName: 'users',
        timeStamps: false
    };


    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){

        Usuario.hasMany(models.Carritos, {
            foreingKey: 'shopping_cart_id', 
            as: 'carritos'
        })
    
    }


    return Usuario;

}