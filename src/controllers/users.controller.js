const { validationResult } = require('express-validator');
const { index, create, write, find, deleteImage, edit } = require("../models/users.model");
const { hashSync } = require('bcryptjs');
const { resolve } = require('path');
const { readFileSync, writeFileSync, unlinkSync } = require('fs');
const { usuarios, imagen } = require('../database/models/index');


let nombreImagenDefault = "default-avatar.png"

const usersController = {
  findUserDB: async function (emailUser) {
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

    let imagenes = await imagen.findAll() // levanta base de datos de imagenes
    
    let imagenDefaultDB = imagenes.find(i => i.nombre == nombreImagenDefault) // busca la imagen que se llama como la default
    let idImagenUsuario = imagenDefaultDB.id // creo variable idImagenUsuario y le asigno el ID del default

    req.body.password = hashSync(req.body.password, 10);
    req.body.isAdmin = String(req.body.email).toLocaleLowerCase().includes('@nicuesa.com');

    if (req.files && req.files.length > 0) {
      let imagenUsuario = await imagen.create({
        nombre: req.files[0].filename
      })
      idImagenUsuario = imagenUsuario.id; // si entra al if (osea que se subió un archivo), le asigna el ID de la nueva imagen
    }

    req.body.imagenId = idImagenUsuario // le asigno le valor del idImagenUsuario al req.body.imagenId

    await usuarios.create(req.body) // se crea el producto, incluyendo el req.body.imagenId
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

    req.session.user = await usersController.findUserDB(req.body.email)

    if (req.body.recordame != undefined) {
      res.cookie("recordame", userDB, { maxAge: 172800000 })
    }

    return res.redirect('/')
  },

  login: async function (req, res) {
    return res.render('users/login', {
      title: "Login",
      styles: ["style", "header", "footer", "login"],

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
    let userDB = await usersController.findUserDB(req.session.user.email)


    return res.render('users/userEdit', {
      title: "Editar tu Usuario",
      styles: ["style", "header", "footer", "userEdit"],
      user: userDB
    });
  },

  processEdit: async function (req, res) {
    let userDB = await usersController.findUserDB(req.session.user.email)
    let imagenId = await imagen.findByPk(req.session.user.id)
    if (req.files && req.files.length > 0) {

      if(userDB.dataValues.imagen.dataValues.nombre != nombreImagenDefault ){
        deleteImage(userDB.dataValues.imagen.dataValues.nombre)
      }
      await imagenId.update({
        nombre: req.files[0].filename
      })// actualizacion tabal IMAGEN segun Id
    }

    await userDB.update({
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      ubicacion: req.body.ubicacion,
    })

    req.session.user = await usersController.findUserDB(req.session.user.email)
    return res.redirect('/')
  },
  destroyUser: async (req, res) => {
    let userDB = await usersController.findUserDB(req.session.user.email)
    let imagenId = await imagen.findByPk(req.session.user.id)
    

    if (!userDB) {
      return res.redirect("/")
    }
    if(userDB.dataValues.imagen.dataValues.nombre != nombreImagenDefault ){
      deleteImage(userDB.dataValues.imagen.dataValues.nombre)
      await imagenId.destroy()

    }


    //destruye la imagen del public

    await userDB.destroy()
    delete req.session.user
    return res.redirect("/");
  },
}

module.exports = usersController