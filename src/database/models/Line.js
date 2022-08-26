module.exports = (sequelize, DataTypes) => {
    let alias = 'linea';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        }
    };
    let config = {
        timestamps:false,
        deletedAt:false
    };
    const Line = sequelize.define(alias,cols,config)

    Line.associate = function(models) {
        Line.belongsTo(models.producto,{
            through:'producto',
            foreignKey:'lineaId'
        })
    }
    
    return Line
}