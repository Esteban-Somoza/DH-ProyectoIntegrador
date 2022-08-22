'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable('product', {
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
        imagen: {
          type: DataTypes.INTEGER
        },
        categoria: {
          type: DataTypes.INTEGER
        },
        information: {
          type: DataTypes.INTEGER
        },
        marca: {
          type: DataTypes.INTEGER
        },
        description: {
          type: DataTypes.TEXT
        }
      });

    } catch (error) {
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};