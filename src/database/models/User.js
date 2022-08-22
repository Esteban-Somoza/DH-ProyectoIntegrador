module.exports = (sequelize, DataTypes) => {
    let alias = "user";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.TEXT
        },
        // avatar: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsTo(models.Image, {
            as: "avatar",
            foreignKey: 'avatarId',
            allowNull: false    
        })
    }

    return User;
}