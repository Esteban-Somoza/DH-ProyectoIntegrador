'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('Information', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      colors: {
          type: DataTypes.INTEGER
      },
      line: {
          type: DataTypes.INTEGER
      },
      configuration: {
          type: DataTypes.TEXT
      },
      apt: {
          type: DataTypes.TEXT
      },
      tecnology: {
          type: DataTypes.TEXT
      },
      dimentions: {
          type: DataTypes.TEXT
      },
      capacity: {
          type: DataTypes.TEXT
      },
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Information');
  }
};
