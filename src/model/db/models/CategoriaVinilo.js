module.exports = (sequelize, DataTypes)=>{

    let alias = 'CategoriaVinilos';
    let cols = {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true,
            alloNull: false,


        }, 
        name: {
            type: DataTypes.STRING(100),
            
        },
    };
    let config = {
        tableName: 'catergories_vinyls',
        
    };


    let CategoriaVinilo = sequelize.define(alias, cols, config);

    return CategoriaVinilo;

}