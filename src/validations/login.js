const { body } = require('express-validator');
const {index, find} = require('../models/users.model')
const {compareSync} = require('bcryptjs')
const { usuarios, imagen } = require('../database/models/index');


const login = [
// Email
body('email').notEmpty().withMessage('El email no puede quedar vacío.').bail().isEmail().withMessage('El formato de email no es válido.').bail().custom(async value => {
  let users = await usuarios.findAll({
    include: {
      all: true
    }
  })

  users = users.map(u => u.email)

  if(!users.includes(value.toLowerCase())){
      throw new Error('El email no esta registrado')
  }
  return true
}),
// Password
body('password').notEmpty().withMessage('La contraseña no puede quedar vacía.').bail().isLength({min : 4}).bail().custom(async(value,{req})=>{
  let {email} = req.body
  let users = await usuarios.findAll({
    include: {
      all: true
    }
  })
  let user = users.find(u => u.email == email)

  if(!user){
    throw new Error("Usuario no encontrado")
  }

  if(!compareSync(value,user.password)){
    throw new Error("La contraseña es incorrecta")
  }
  
  return true

})
]

module.exports = login