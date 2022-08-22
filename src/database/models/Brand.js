module.exports = (sequelize, DataTypes) => {
    let alias = 'product';
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
    console.log(Brand);

    Brand.associate = function(models) {
        Brand.hasMany(models.Product,{
            as: "product",
            foreignKey:'brandId'
        })
        // Brand.hasMany(models.Line,{
        //     through:'imagesProducts',
        //     foreignKey:'product'
        // })
    }
    return Brand
}