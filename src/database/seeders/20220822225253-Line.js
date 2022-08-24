'use strict';

const productIndex = require('../../models/product.model')

module.exports = {
  async up(queryInterface, Sequelize) {
    let lineas = productIndex.index().map((product, indice) => {
      let linea = {
        id: indice+= 1,
        nombre: product.information.linea
      }
      return linea
    })

    await queryInterface.bulkInsert('linea', lineas, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('linea', null, {});
  }
};

