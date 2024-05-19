module.exports = (sequelize, DataTypes)=>{

    let alias = 'CategoriaInstrumentos';
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
        tableName: 'catergories_instruments',
        
    };


    let CategoriaInstrumento = sequelize.define(alias, cols, config);

    return CategoriaInstrumento;

}