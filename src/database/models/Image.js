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
        deleteAt: false,
        tableName: "imagen"
    };

    const Image = sequelize.define(alias, cols, config);
    
    Image.associate = function(models){
        Image.hasMany(models.usuarios, {
            as: 'usuarios',
            foreignKey: 'id',
            allowNull: false
        }),
        
        Image.hasOne(models.producto,{
            as: 'producto',
            foreignKey:'id',
            allowNull: false
        })
    }
    return Image
}