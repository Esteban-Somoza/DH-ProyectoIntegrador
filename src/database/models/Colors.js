module.exports = (sequelize, DataTypes) => {
    let alias = 'information';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        timestamps:false,
        deletedAt:false
    };
    const Color = sequelize.define(alias,cols,config)

    Color.associate = function(models) {
        Color.belongsToMany(models.Information,{
            as: "information",
            through: "informationColor",
            foreignKey:'colorId',
            otherKey:'informationId',
            allowNull: false
        })  
    }

    return Color
}