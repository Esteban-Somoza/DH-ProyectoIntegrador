const { validationResult } = require('express-validator');
const { index, create, write, find, deleteImage, edit } = require("../models/users.model");
const { hashSync } = require('bcryptjs');
const { resolve } = require('path');
const { readFileSync, writeFileSync, unlinkSync } = require('fs');
const { usuarios, imagen } = require('../database/models/index');



const usersController = {
  saveSessionUser: async function(emailUser) {
    let users = await usuarios.findAll({
      include: {
        all: true
      }
    })

    return users.find(u => u.email == emailUser)
  },

  register: async (req, res) => {
    return res.render("./users/register", {
      title: "Registro",
      styles: ["style", "header", "footer", "register"],
    })
  },


  process: async function (req, res) {
    let validaciones = validationResult(req)
    let { errors } = validaciones;

    let imagenes = await imagen.findAll()
    let idImagenUsuarioDefault = imagenes.find(i => i.dataValues.nombre == "avatar-default.png")

    if (errors && errors.length > 0) {
      if (req.files && req.files.length > 0) {
        deleteImage(req.files[0].filename)
      }
      return res.render('users/register', {
        title: "Registro",
        styles: ["style", "header", "footer", "register"],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }

    req.body.password = hashSync(req.body.password, 10);
    req.body.isAdmin = String(req.body.email).toLocaleLowerCase().includes('@nicuesa.com');

    if (req.files && req.files.length > 0) {
      let imagenUsuario = await imagen.create({
        nombre: req.files[0].filename
      })
      idImagenUsuarioDefault = imagenUsuario.id;
    }

    req.body.imagenId = idImagenUsuarioDefault

    await usuarios.create(req.body)
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

    req.session.user = await usersController.saveSessionUser(req.body.email)

    if (req.body.recordame != undefined) {
      res.cookie("recordame", userDB, { maxAge: 172800000 })
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
    return res.render('users/perfil', {
      title: "Perfil",
      styles: ["style", "header", "footer", "perfil"]
    })
  },

  logout: async function (req, res) {
    delete req.session.user
    return res.redirect('/')
  },


  userEdit: async function (req, res) {
    let userDB = await usersController.saveSessionUser(req.session.user.email)
    
    return res.render('users/userEdit', {
      title: "Editar tu Usuario",
      styles: ["style", "header", "footer", "userEdit"],
      user: userDB
    });
  },

  processEdit: async function (req, res) {
    let userDB = await usersController.saveSessionUser(req.session.user.email)

    if (req.files && req.files.length > 0) {
      deleteImage(userDB.imagen.nombre)
      let newUserImage = await imagen.create({
        nombre: req.files[0].filename
      })
      await userDB.update({
        imagenId: newUserImage.id
      })
    }

    await userDB.update({
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      ubicacion: req.body.ubicacion,
    })

    req.session.user = await usersController.saveSessionUser(req.session.user.email)
    // req.session.user = updatedSessionUser
    // let updatedSessionUser = await usersController.saveSessionUser(req.session.user.email)
    // req.session.user = updatedSessionUser

    return res.redirect('/')
  }
}

module.exports = usersController