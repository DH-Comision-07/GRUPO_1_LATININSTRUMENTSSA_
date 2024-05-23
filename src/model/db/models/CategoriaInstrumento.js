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
    CategoriaInstrumento.associate = function(models){
        
    CategoriaInstrumento.belongsToMany( models.Productos, {
        as: 'productos', 
        through: 'product_category_instrument',
        foreingKey: 'product_id',
        otherKey: 'category_instrument_id', 
        timeStamps: false
    })
    }
    return CategoriaInstrumento;

}