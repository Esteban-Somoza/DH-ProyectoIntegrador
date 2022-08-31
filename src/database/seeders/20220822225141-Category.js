'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categoria', [
      {
        nombre: "baño",
        subcategoriaId: null,
      },
      {
        nombre: "cocina",
        subcategoriaId: null,
      },
      {
        nombre: "termotanque",
        subcategoriaId: null,
      },
      {
        nombre: "ducha",
        subcategoriaId: 1,
      },
      {
        nombre: "inodoro",
        subcategoriaId: 1,
      },
      {
        nombre: "bidet",
        subcategoriaId: 1,
      },
      {
        nombre: "griferia",
        subcategoriaId: 1,
      },
      {
        nombre: "lavatorio",
        subcategoriaId: 1,
      },
      {
        nombre: "bacha",
        subcategoriaId: 2,
      },
      {
        nombre: "horno",
        subcategoriaId: 2,
      },
      {
        nombre: "griferia",
        subcategoriaId: 2,
      },
      {
        nombre: "termotanques",
        subcategoriaId: 3,
      },
      {
        nombre: "tanquesDeAgua",
        subcategoriaId: 3,
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
