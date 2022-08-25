'use strict';

const { index } = require('../../models/users.model')

module.exports = {
  async up(queryInterface, Sequelize) {
    let users = index().map((user,indice) => {
      let userMap = {
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        password: user.password,
        imagenId: indice+=1,
        isAdmin: user.isAdmin,
        telefono: user.telefono,
        ubicacion: user.ubicacion
      }
      return userMap
    })
    await queryInterface.bulkInsert('usuarios', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};

