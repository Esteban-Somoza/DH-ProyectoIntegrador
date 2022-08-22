module.exports = (sequelize, DataTypes) => {
    let alias = 'line';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        }
    };
    let config = {
        timestamps:false,
        deletedAt:false
    };
    const Brand = sequelize.define(alias,cols,config)

    Line.associate = function(models) {
        Line.hasMany(models.Information,{
            as: "information",
            foreignKey:'lineId'
        })
        Line.hasMany(models.Brand,{
            through:'imagesProducts',
            foreignKey:'product'
        })
    }
    return Line
}