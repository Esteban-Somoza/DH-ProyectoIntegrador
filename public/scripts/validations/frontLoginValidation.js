let form = document.forms.login__form
let imputs = form.elements

const { usuarios, imagen } = require('../database/models/index');
const {findUserDB} = require("../../../src/controllers/users.controller.js");
// console.log(imputs.password);
// console.log(imputs.email);


imputs.email.addEventListener('input', function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".feed")
    let msg = null
    if(!validator.islength(value,{min:7})){
        msg = "No es un email válido"
    }
    else if (!validator.isEmail(value)){
        msg = "No es un email válido"
    }
    if (msg) {
        field.classList.remove("valid")
        field.classList.add("invalid")
        feed.innerText = msg
    }
    else{
        field.classList.remove("invalid")
        field.classList.add("valid")
        feed.innerText = "El campo es correcto"
    }
})
imputs.password.addEventListener('input', function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".feed")
    let msg = null
    if(!validator.islength(value,{min:7})){
        msg = "No es un email válido"
    } 
    else if (!validator.isEmail(value)){
        msg = "No es un email válido"
    }
})