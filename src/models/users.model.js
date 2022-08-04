const {readFileSync, writeFileSync}= require('fs');
const {resolve}= require('path');
const bcrypt = require('bcryptjs');

const model = {
  index:function(){
    let file = resolve(__dirname,'../data','users.json');
    let data = readFileSync(file);
    return JSON.parse(data);
  },
  find:function(email){
    let file = resolve(__dirname,'../data','users.json');
    let data = readFileSync(file);
    let users = JSON.parse(data);
    return users.find(user => user.email === email)
  },
  create: function(data){
    let file = resolve(__dirname,'../data','users.json');
    let info = readFileSync(file);
    let users = JSON.parse(info);
    let last= users[users.length - 1];
    return Object({
        id: users.length == 0 ? 1 : last.id + 1,
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        password: bcrypt.hashSync(data.password,10),
        image: data.image
    })
  },
  write: function(data) {
    let file = resolve(__dirname,'../data','users.json');
    let info = JSON.stringify(data,null,2);
    return writeFileSync(file, info);
  },
}

module.exports = model;