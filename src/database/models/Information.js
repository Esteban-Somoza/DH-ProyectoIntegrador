module.exports = (sequelize, DataTypes) => {
    let alias = 'informacion';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        colores: {
            type: DataTypes.TEXT
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
        Information.belongsTo(models.producto,{
            as: "producto",
            foreignKey:'informacionId',
            allowNull: false
        })

     
    }
    return Information
}