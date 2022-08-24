module.exports = (sequelize, DataTypes) => {
    let alias = 'categoria';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        subcategoriaId: {
            type: DataTypes.STRING
        }
    };
    
    let config = {
        timestamps:false,
        deletedAt:false
    };
    const Category = sequelize.define(alias,cols,config)

    Category.associate = function(models) {
        Category.hasMany(models.Product,{
            as:'producto',
            foreignKey:'categoriaId',
        }),
        Category.belongsTo(models.Category,{
            as: "categoria",
            foreignKey:'subcategoriaId',
        })
    }
    return Category
}