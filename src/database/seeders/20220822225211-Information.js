'use strict';
const { index } = require('../../models/product.model')

module.exports = {
  async up(queryInterface, Sequelize) {
    
    let informacion = index().map(product => {
      let productInformation = {
        colores: product.information.colores,
        configuracion: 1,
        apto: 1,
        tecnologia: 1,
        medidas: 1,
        capacidad: 1,
      }
      return productInformation
    })

    await queryInterface.bulkInsert('informacion', informacion, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});

  }
};

