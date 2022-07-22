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
    body("precio") //solucionar problema numeros
    .notEmpty()
    .withMessage("Complete los campos")
    .bail(),
    body("marca")
    .notEmpty()
    .withMessage("Complete los campos")
    .bail()
    .isLength({ min: 2 })
    .withMessage("La marca debe contener minimo dos caracteres")
    .bail() 
    .isLength({ max: 16 })
    .withMessage("La marca debe contener maximo 16 caracteres")
    .bail(),
    body('imagenProducto').custom((value,{req}) =>{
      let archivos =req.files
      if(!archivos || archivos.length == 0){
          throw new Error('No se subio ninguna imagen')
      }
      let extensiones = ['.svg','.png','.jpg','.jpeg']
      let imagenProducto = archivos[0]
      let extension = extname(avatar.filename)

      if(!extensiones.includes(extension)){
          unlinkSync(resolve(__dirname, '/public/images','imagenProducto',imagenProducto.filename))
          throw new Error('La imagen no tiene una extension valida')
      }

      if(avatar.size > 2097152){
          unlinkSync(resolve(__dirname, '/public/images','imagenProducto',imagenProducto.filename))
          throw new Error('La imagen supera el peso de 2MB')
      }

      return true
  })
    
   
  
];
module.exports = productCreate;