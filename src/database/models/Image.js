module.exports = (sequelize, DataTypes) => {
    let alias = 'imagen';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre:{
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
            as: 'usuarios',
            foreignKey: 'imagenId',
            allowNull: false
        }),
        
        Image.belongsTo(models.Product,{
            as: 'producto',
            foreignKey:'imagenId',
            allowNull: false
        })
    }
    return Image
}