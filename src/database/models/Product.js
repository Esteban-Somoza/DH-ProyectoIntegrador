module.exports = (sequelize, DataTypes) => {
    let alias = 'producto';
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
        precio: {
            type: DataTypes.FLOAT
        },
        imagenId: {
            type: DataTypes.INTEGER
        },
        categoriaId: {
            type: DataTypes.INTEGER
        },
        subcategoriaId: {
            type: DataTypes.INTEGER
        },
        informationId: {
            type: DataTypes.INTEGER
        },
        marcaId: {
            type: DataTypes.INTEGER
        },
        lineaId: {
            type: DataTypes.INTEGER
        },
        descripcion: {
            type: DataTypes.TEXT
        }

    };
    let config = {
        timestamps:false,
        deletedAt:false,
    };
    const Product = sequelize.define(alias,cols,config)

    Product.associate = function(models) {
        Product.belongsTo(models.Image,{
            as: "imagen",
            foreignKey:'imagenId',
            allowNull: false
        }),

        Product.belongsTo(models.Category,{
            as: "categoria",
            foreignKey:'categoriaId',
            allowNull: false
        }),

        Product.belongsTo(models.Brand,{
            as: "marca",
            foreignKey:'marcaId',
        }),
        
        Product.belongsTo(models.Information,{
            as: "informacion",
            foreignKey:'informacionId',
            allowNull: false
        }),

        Product.belongsTo(models.Line,{
            as: "linea",
            foreignKey:'lineaId',
            allowNull: false
        }),

        Product.belongsTo(models.SubCategory,{
            as: "subcategoria",
            foreignKey:'subcategoriaId',
        })

    }

    return Product
}