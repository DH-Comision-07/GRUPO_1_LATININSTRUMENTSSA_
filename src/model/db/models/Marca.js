module.exports = (sequelize, DataTypes)=>{

    let alias = 'Marcas';
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
    };
    let config = {
        tableName: 'brands',
        timeStamps: false
    };


    let Marca = sequelize.define(alias, cols, config);

    return Marca;

}