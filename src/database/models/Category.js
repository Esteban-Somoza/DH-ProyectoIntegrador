module.exports = (sequelize, DataTypes) => {
    let alias = 'category';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        subCategory: {
            type: DataTypes.INTEGER
        }
    };
    
    let config = {
        timestamps:false,
        deletedAt:false
    };
    const Category = sequelize.define(alias,cols,config)

    Category.associate = function(models) {
        Category.hasMany(models.Product,{
            as:'products',
            foreignKey:'categoryId',
        })
        Category.hasMany(models.Category,{
            as: "subcategory",
            foreignKey:'subcategoryId',
        })
    }
    return Category
}