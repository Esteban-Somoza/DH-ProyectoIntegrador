module.exports = (sequelize, DataTypes) => {
    let alias = 'image';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        path:{
            type: DataTypes.STRING
        }
    } 
    let config = {
        timestamps: false,
        deleteAt: false
    };

    const Image = sequelize.define(alias, cols, config);
    
    Image.associate = function(models){
        Image.hasMany(models.User, {
            as: 'users',
            foreignKey: 'avatarId'
        }),
        
        Image.belongsTo(models.Product,{
            as: 'products',
            foreignKey:'productId',
        })
    }
    return Image
}