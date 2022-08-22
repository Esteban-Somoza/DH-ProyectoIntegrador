'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('Colors', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      name: {
          type: DataTypes.INTEGER
      }
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Colors');
  }
};
