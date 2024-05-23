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
    CategoriaVinilo.associate = function(models){
        
    CategoriaVinilo.belongsToMany( models.Productos, {
        as: 'productos', 
        through: 'product_category_vinyl',
        foreingKey: 'product_id ',
        otherKey: 'category_vinyl_id', 
        timeStamps: false
    })
    }
    return CategoriaVinilo;

}