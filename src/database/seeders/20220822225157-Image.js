'use strict';

const { index } = require('../../models/users.model')

module.exports = {
  async up(queryInterface, Sequelize) {
    let image = index().map(user => {
      let userimage = {
        nombre: user.imagenId,
      }
      return userimage
    })
    await queryInterface.bulkInsert('imagen', image, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};

