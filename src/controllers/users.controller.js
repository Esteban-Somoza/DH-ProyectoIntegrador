const { validationResult } = require('express-validator');
const { index, create, write } = require("../models/users.model");


const usersController = {
  login: (req, res) => {
    return res.render("./users/login", {
      title: "Login",
    });
  },

  register: (req, res) => {
    return res.render("./users/register", {
      title: "Registro",

    })
  },
  process: function (req, res) {
    let validaciones = validationResult(req)
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render('users/register', {
        styles: ['forms'],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }

  }
}

module.exports = usersController