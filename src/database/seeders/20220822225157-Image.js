'use strict';

const userIndex = require('../../models/users.model')
const productIndex = require('../../models/product.model')

module.exports = {
  async up(queryInterface, Sequelize) {
    let allImages = []

    userIndex.index().map(user => {
      let imagesU = {
        nombre: user.imagenId,
      }
      return allImages.push(imagesU)
    })

    productIndex.index().map(product => {
      let imagesP = {
        nombre: product.imagen,
      }
      return allImages.push(imagesP)
    })
    
    console.log(allImages);
    await queryInterface.bulkInsert('imagen', allImages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('imagen', null, {});
  }
};

