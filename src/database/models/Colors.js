module.exports = (sequelize, DataTypes) => {
    let alias = 'colores';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        timestamps:false,
        deletedAt:false
    };
    const Color = sequelize.define(alias,cols,config)

    Color.associate = function(models) {
        Color.belongsTo(models.Information,{
            as: "informacion",
            foreignKey:'coloresId',
        })  
    }
    return Color
}