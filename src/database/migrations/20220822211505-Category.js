'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('Category', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      name: {
          type: DataTypes.STRING
      },
      subCategory: {
          type: DataTypes.INTEGER
      }
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Category');
  }
};
