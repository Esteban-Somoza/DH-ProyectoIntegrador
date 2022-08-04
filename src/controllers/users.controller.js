const { validationResult } = require('express-validator');
const { index, create, write, find } = require("../models/users.model");


const usersController = {
  login: (req, res) => {
    return res.render("./users/login", {
      title: "Login",
      styles: ["style", "header", "footer", "login"],
    });
  },

  register: (req, res) => {
    return res.render("./users/register", {
      title: "Registro",
      styles: ["style", "header", "footer", "register"],

    })
  },
  process: function (req, res) {
    let validaciones = validationResult(req)
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render('users/register', {
        title: "Registro",
        styles: ["style", "header", "footer", "register"],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    } else { res.redirect("../") }

  },
  access: function (req, res) {
    let validaciones = validationResult(req)
    let { errors } = validaciones
    if (errors && errors.length > 0) {
      return res.render('users/login', {
        title: "Login",
        styles: ["style", "header", "footer", "login"],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }

    let user = find(req.body.email)

    req.session.user = user
    
    return res.redirect('/')
  },

  logout: function (req, res) {
    delete req.session.user
    return res.redirect('/')
  }
}

module.exports = usersController