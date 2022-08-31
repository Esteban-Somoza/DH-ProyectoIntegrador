'use strict';

const { index } = require('../../models/product.model')
const usuarios = require('../../models/users.model')

// console.log(usuarios);
module.exports = {
  async up(queryInterface, Sequelize) {
    let cantidadUsuarios = usuarios.index().length+2 //+2 por el desfazaje de lógica y por la default image de usuario

    console.log(cantidadUsuarios);
    let products = index().map((product, index) => {
      let productMap = {
        nombre: product.name,
        precio: product.price,
        imagenId: cantidadUsuarios++,
        categoria: product.categoria,
        subcategoria: product.subCategoria,
        informacionId: index+=1,
        marca: product.marca,
        linea: product.information.linea,
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

