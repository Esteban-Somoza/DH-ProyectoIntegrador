const { body } = require("express-validator");
const { extname, resolve } = require("path");
const { unlinkSync } = require("fs");
const { index } = require("../models/users.model");
const register = [
  body("nombre")
    .notEmpty()
    .withMessage("Complete los campos")
    .bail()
    .isLength({ min: 2, max: 16 })
    .withMessage("El nombre debe contener minimo dos caracteres")
    .bail(),
  body("apellido")
    .notEmpty()
    .withMessage("Complete los campos")
    .bail()
    .isLength({ min: 2, max: 16 })
    .withMessage("El nombre debe contener minimo dos caracteres")
    .bail(),
  body("email")
    .notEmpty()
    .withMessage("Complete los campos")
    .bail()
    .isEmail()
    .withMessage("No corresponde a un email")
    .bail()
    .custom((value) => {
      let users = index();
      users = users.map((u) => u.email);
      if (users.includes(value)) {
        throw new Error("El email ya esta en uso");
      }
      return true;
    })
    .bail(),
  body("password")
    .notEmpty()
    .withMessage("Complete los campos")

    .bail()
    .isLength({ min: 2, max: 16 })
    .withMessage("El nombre debe contener minimo dos caracteres")
    .bail(),
  
];
module.exports = register;