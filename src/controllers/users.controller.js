const { validationResult } = require('express-validator');
const { index, create, write, find, deleteImage, edit } = require("../models/users.model");

const { resolve } = require('path');
const { readFileSync, writeFileSync, unlinkSync } = require('fs');
const isLogged = require('../middlewares/isLogged');



const usersController = {

  register: async (req, res) => {
    return res.render("./users/register", {
      title: "Registro",
      styles: ["style", "header", "footer", "register"],

    })
  },


  process: async function (req, res) {
    let validaciones = validationResult(req)
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      /* deleteImage(req.files[0].filename) */
      return res.render('users/register', {
        title: "Registro",
        styles: ["style", "header", "footer", "register"],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }
    req.body.imagen = req.files[0].filename;

    let newUser = create(req.body)
    let users = index();
    users.push(newUser)
    write(users)
    return res.redirect('/')
  },


  access: async function (req, res) {
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
    let user = find(req.body.email.toLowerCase())
    req.session.user = user
    if (req.body.recordame != undefined) {
      res.cookie("recordame", user.email / id, { maxAge: 172800000 })
    }
    return res.redirect('/')
  },

  login: async function (req, res) {
    return res.render('users/login', {
      title: "Login",
      styles: ["style", "header", "footer", "login"]
    });
  },

  perfil: async function (req, res) {
    // let file = resolve(__dirname, '../data', 'users.json');
    // let data = readFileSync(file);
    // let users = JSON.parse(data);
    return res.render('users/perfil', {
      // users: users,
      title: "Perfil",
      styles: ["style", "header", "footer", "perfil"]
    })
  },

  logout: async function (req, res) {
    delete req.session.user
    return res.redirect('/')
  },


  userEdit: async function (req, res) {
    let users = index()
    let user = users.find(user => user.email == req.session.user.email)
    return res.render('users/userEdit', {

      title: "Editar tu Usuario",
      styles: ["style", "header", "footer", "userEdit"],
      user: user
    });
  },

  processEdit: async function (req, res) {
    let userToEdit = find(req.session.user.email)
    let users = index();
     console.log(req.body);


     
    req.body.imagenId = userToEdit.imagenId


    if (req.files && req.files.length > 0) {
      deleteImage(userToEdit.imagenId)
      req.body.imagenId = req.files[0].filename
    }

    let edited = edit(req.body, userToEdit)

    let editUser = users.map(user => {
      if (user.email == edited.email)
        user = edited
      return user
    });

    write(editUser)
    return res.redirect('/')
  }
}

module.exports = usersController