'use strict';
const { index } = require('../../models/product.model')

module.exports = {
  async up(queryInterface, Sequelize) {
    
    let informacion = index().map(product => {
      let productInformation = {
        colores: product.information.colores,
        configuracion: product.information.configuracion,
        apto: product.information.apto,
        tecnologia: product.information.tecnologia,
        medidas: product.information.medidas,
        capacidad: product.information.capacidad,
        disenio: product.information.disenio,
      }
      return productInformation
    })

    await queryInterface.bulkInsert('informacion', informacion, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});

  }
};

