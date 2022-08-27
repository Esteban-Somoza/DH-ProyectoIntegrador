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
        deletedAt:false,
        tableName: "categoria"
    };
    const Category = sequelize.define(alias,cols,config)

    Category.associate = function(models) {
        Category.hasMany(models.producto,{
            as:'producto',
            foreignKey:'categoriaId',
        }),
        Category.belongsTo(models.categoria,{
            as: "categoria",
            foreignKey:'subcategoriaId',
        })
    }
    return Category
}