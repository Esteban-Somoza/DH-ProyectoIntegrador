'use strict';

const { index } = require('../../models/product.model')
const usuarios = require('../../models/users.model')

// console.log(usuarios);
module.exports = {
  async up(queryInterface, Sequelize) {

    let cantidadUsuarios = usuarios.index().length

    console.log(cantidadUsuarios);
    let products = index().map((product, index) => {
      let productMap = {
        nombre: product.name,
        precio: product.price,
        imagenId: cantidadUsuarios++,
        categoriaId: product.categoria,
        subcategoriaId: product.subCategoria,
        informacionId: index+=1,
        marcaId: 1,
        lineaId: 1,
        descripcion: product.details.description
      }
      return productMap
    })
    await queryInterface.bulkInsert('producto', products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};

