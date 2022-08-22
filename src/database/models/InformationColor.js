module.exports = (sequelize, DataTypes) => {
    let alias = 'informationColor';
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
    const product = sequelize.define(alias,cols,config)

    product.associate = function(models) {
        product.belongsToMany(image,{
            through:'imagesProducts',
            foreignKey:'product'
        })
    }
    return product
}