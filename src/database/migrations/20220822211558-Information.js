'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('informacion', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      colores: {
          type: DataTypes.TEXT
      },
      configuracion: {
          type: DataTypes.TEXT
      },
      apto: {
          type: DataTypes.TEXT
      },
      tecnologia: {
          type: DataTypes.TEXT
      },
      medidas: {
          type: DataTypes.TEXT
      },
      capacidad: {
          type: DataTypes.TEXT
      },
      disenio: {
          type: DataTypes.TEXT
      },
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('informacion');
  }
};
