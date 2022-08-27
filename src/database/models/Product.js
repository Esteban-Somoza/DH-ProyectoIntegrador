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
        informacionId: {
            type: DataTypes.INTEGER
        },
        marca: {
            type: DataTypes.TEXT
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
        tableName: "producto"
    };
    const Product = sequelize.define(alias,cols,config)

    Product.associate = function(models) {
        Product.hasMany(models.imagen,{
            as: "imagen",
            foreignKey:'id',
            allowNull: false
        }),

        Product.belongsTo(models.categoria,{
            as: "categoria",
            foreignKey:'categoriaId',
            allowNull: false
        }),

        Product.belongsTo(models.informacion,{
            as: "informacion",
            foreignKey:'informacionId',
            allowNull: false
        }),

        Product.hasMany(models.linea,{
            as: "linea",
            foreignKey:'id',
            allowNull: false
        })

       /* Product.belongsTo(models.subcategoria,{
            as: "subcategoria",
            foreignKey:'subcategoriaId',
        })
        */
    }

    return Product
}