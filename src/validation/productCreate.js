const { body } = require("express-validator");
const { extname, resolve } = require("path");
const { unlinkSync } = require("fs");
const { index } = require("../models/product.model");
const productCreate = [
  body("nombreProducto")
    .notEmpty()
    .withMessage("Complete los campos")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El nombre debe contener minimo dos caracteres")
    .bail() 
    .isLength({ max: 16 })
    .withMessage("El nombre debe contener maximo 16 caracteres")
    .bail(),
   
  
];
module.exports = productCreate;