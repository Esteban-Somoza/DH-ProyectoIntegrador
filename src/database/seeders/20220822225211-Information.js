'use strict';

const productIndex = require('../../models/product.model')

module.exports = {
  async up(queryInterface, Sequelize) {
  
    // productIndex.index().map(product => {
    //   let productInformation = {
    //     coloresId: product.information.colores,
    //     configuracion: 1,
    //     apto: 1,
    //     teconologia: 1,
    //     medidad: 1,
    //     capacidad: 1,
    //   }
    //   return allImages.push(imagesU)
    // })
    // console.log(allImages);
    await queryInterface.bulkInsert('informacion', [], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};