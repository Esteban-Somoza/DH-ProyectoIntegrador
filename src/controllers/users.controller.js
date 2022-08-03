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
    console.log(validaciones);
    if (errors && errors.length > 0) {
      return res.render('users/register', {
        title: "Registro",

        oldData: req.body,
        errors: validaciones.mapped()
      });
    } else { res.redirect("../") }

  },
  access: function(req, res){
    let validaciones = validationResult(req)
    let { errors } = validaciones
if (errors && errors.length > 0) {
  return res.render('users/login', {
    styles: ['forms'],
    oldData: req.body,
    errors: validaciones.mapped()
  });
}

let users = index();
let user = users.find(u => u.email === req.body.email)
req.session.user = user
return res.redirect('/')
  },
logout: function (req, res) {
  delete req.session.user
  return res.redirect('/')
}
}

module.exports = usersController