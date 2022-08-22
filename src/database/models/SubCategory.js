module.exports = (sequelize, DataTypes) => {
    let alias = 'subcategoria';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        }
    };
    
    let config = {
        timestamps:false,
        deletedAt:false
    };
    
    const SubCategory = sequelize.define(alias,cols,config)

    SubCategory.associate = function(models) {
        SubCategory.hasMany(models.Product,{
            as:'producto',
            foreignKey:'subcategoriaId',
        })
    }
    return SubCategory
}