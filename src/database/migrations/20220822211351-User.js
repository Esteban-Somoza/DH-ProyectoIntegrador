'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('usuarios', {
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
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};