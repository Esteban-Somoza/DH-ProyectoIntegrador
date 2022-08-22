module.exports = (sequelize, DataTypes) => {
    let alias = 'product';
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
        price: {
            type: DataTypes.FLOAT
        },
        imagen: {
            type: DataTypes.INTEGER
        },
        categoria: {
            type: DataTypes.INTEGER
        },
        information: {
            type: DataTypes.INTEGER
        },
        marca: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }

    };
    let config = {
        timestamps:false,
        deletedAt:false,
    };
    const Product = sequelize.define(alias,cols,config)

    Product.associate = function(models) {
        Product.hasMany(models.Image,{
            as: "images",
            foreignKey:'productId',
            allowNull: false
        }),

        Product.belongsTo(models.Category,{
            as: "categories",
            foreignKey:'categoryId',
            allowNull: false
        }),

        Product.belongsTo(models.Brand,{
            as: "brands",
            foreignKey:'brandId',
            allowNull: false
        }),
        
        Product.hasMany(models.Information,{
            as: "information",
            foreignKey:'productId',
            allowNull: false
        })
    }
    return Product
}