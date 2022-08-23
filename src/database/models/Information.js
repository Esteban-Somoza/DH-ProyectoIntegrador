module.exports = (sequelize, DataTypes) => {
    let alias = 'informacion';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        coloresId: {
            type: DataTypes.INTEGER
        },
        configuracion: {
            type: DataTypes.TEXT
        },
        apto: {
            type: DataTypes.TEXT
        },
        tecnologia: {
            type: DataTypes.TEXT
        },
        medidas: {
            type: DataTypes.TEXT
        },
        capacidad: {
            type: DataTypes.TEXT
        },
    };

    let config = {
        timestamps:false,
        deletedAt:false
    };
    
    const Information = sequelize.define(alias,cols,config)

    Information.associate = function(models) {
        Information.belongsTo(models.Product,{
            as: "producto",
            foreignKey:'informacionId',
            allowNull: false
        }),

        Information.hasMany(models.Color,{
            as: "colores",
            foreignKey:'coloresId',
        })
    }
    return Information
}