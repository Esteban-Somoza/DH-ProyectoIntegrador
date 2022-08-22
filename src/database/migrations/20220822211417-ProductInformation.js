'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('productInformation', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: {
          type: DataTypes.STRING
        },
        price: {
          type: DataTypes.FLOAT
        },
        description: {
          type: DataTypes.TEXT
        },
        image: {
          type: DataTypes.INTEGER
        },
        category: {
          type: DataTypes.INTEGER
        },
        information: {
          type: DataTypes.INTEGER
        },
        information: {
          type: DataTypes.INTEGER
        },
        brand: {
          type: DataTypes.INTEGER
        },
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};