const { validationResult } = require('express-validator');
const { index, create, write, find, deleteImage, edit } = require("../models/users.model");
const { hashSync } = require('bcryptjs');
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

  imagenDefault: async function () {
    let imagenes = await imagen.findAll()
    let imagenDefault = imagenes.find(i => i.nombre == nombreImagenDefault)
    return imagenDefault
  },

  register: async (req, res) => {
    return res.render("./users/register", {
      title: "Registro",
      styles: ["style", "header", "footer", "register", "frontValidations"],
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
        styles: ["style", "header", "footer", "register", "frontValidations"],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }

    let imagenDefault = await usersController.imagenDefault()
    let idImagenUsuario = imagenDefault.id // creo variable idImagenUsuario y le asigno el ID del default

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
        styles: ["style", "header", "footer", "login", "frontValidations"],
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
      styles: ["style", "header", "footer", "login", "frontValidations"],
      saludo: "hola"
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
      styles: ["style", "header", "footer", "userEdit", "frontValidations"],
      user: userDB
    });
  },

  processEdit: async function (req, res) {
    let validaciones = validationResult(req)
    let { errors } = validaciones

    if (errors && errors.length > 0) {
      return res.render('users/userEdit', {
        title: "Editar tu Usuario",
        styles: ["style", "header", "footer", "userEdit", "frontValidations"],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }

    let userDB = await usersController.findUserDB(req.session.user.email)
    let imagenUsuario = await imagen.findByPk(req.session.user.imagenId)
    let imagenDefault = await usersController.imagenDefault()
    let hasDefaultImage = userDB.imagen.nombre == nombreImagenDefault
    let imagenId = imagenUsuario.id

    if (req.files && req.files.length > 0) {
      if (hasDefaultImage) {
        let nuevaImagenUsuario = await imagen.create({
          nombre: req.files[0].filename
        })// actualizacion tabal IMAGEN segun Id
        imagenId = nuevaImagenUsuario.id;
      }

      else {
        deleteImage(userDB.dataValues.imagen.dataValues.nombre)
        await imagenUsuario.update({
          nombre: req.files[0].filename
        })// actualizacion tabal IMAGEN segun Id
      }
    }

    if (req.body.eliminarImagen == "true" && !hasDefaultImage) {
      deleteImage(userDB.dataValues.imagen.dataValues.nombre)
      imagenId = imagenDefault.id
    }

    await userDB.update({
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      ubicacion: req.body.ubicacion,
      imagenId: imagenId
    })

    req.session.user = await usersController.findUserDB(req.session.user.email)
    return res.redirect('/')
  },

  destroyUser: async (req, res) => {
    let userDB = await usersController.findUserDB(req.session.user.email)
    let imagenId = await imagen.findByPk(req.session.user.id)
    let hasDefaultImage = userDB.imagen.nombre == nombreImagenDefault

    if (!userDB) {
      return res.redirect("/")
    }
    if (!hasDefaultImage) {
      deleteImage(userDB.dataValues.imagen.dataValues.nombre)
      await imagenId.destroy()
    }

    await userDB.destroy()
    delete req.session.user
    return res.redirect("/");
  }
}

module.exports = usersController