module.exports = (sequelize, DataTypes) => {
    let alias = 'information';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        colors: {
            type: DataTypes.INTEGER
        },
        line: {
            type: DataTypes.INTEGER
        },
        configuration: {
            type: DataTypes.TEXT
        },
        apt: {
            type: DataTypes.TEXT
        },
        tecnology: {
            type: DataTypes.TEXT
        },
        dimentions: {
            type: DataTypes.TEXT
        },
        capacity: {
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
            as: "products",
            foreignKey:'productId',
            allowNull: false
        }),

        Information.belongsToMany(models.Color,{
            as: "colors",
            through: "informationColor",
            foreignKey:'informationId',
            otherKey:'colorId',
            allowNull: false
        }),
        
        Information.belongsTo(models.Line,{
            as: "lines",
            foreignKey:'lineId',
            allowNull: false
        })
    }
    return Information
}