'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('producto', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        nombre: {
          type: DataTypes.STRING
        },
        precio: {
          type: DataTypes.FLOAT
        },
        imagenId: {
          type: DataTypes.INTEGER
        },
        categoria: {
          type: DataTypes.STRING
        },
        subcategoria: {
          type: DataTypes.STRING
        },
        informacionId: {
          type: DataTypes.INTEGER
        },
        marca: {
          type: DataTypes.TEXT
        },
        linea: {
          type: DataTypes.STRING
        },
        descripcion: {
          type: DataTypes.TEXT
        }
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('producto');
  }
};