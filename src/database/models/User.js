module.exports = (sequelize, DataTypes) => {
    let alias = "usuarios";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
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
        imagenId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        telefono: {
            type: DataTypes.TEXT
        },
        ubicacion: {
            type: DataTypes.TEXT
        },
    };
    let config = {
        timestamps: false,
        deletedAt: false,
        tableName: "usuarios"
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.imagen, {
            as: "imagen",
            foreignKey: 'id',
            allowNull: false
        })
    }

    return User;
}