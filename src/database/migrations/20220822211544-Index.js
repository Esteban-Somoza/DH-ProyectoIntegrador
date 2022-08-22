'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('Index', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      name: {
          type: DataTypes.STRING
      }
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Index');
  }
};
