let form = document.forms.login__form
let inputs = form.elements



inputs.email.addEventListener('input', function (e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".feed")
    let msg = null
    if (!validator.islength(value, { min: 7 })) {
        msg = "No es un email válido"
    }
    else if (!validator.isEmail(value)) {
        msg = "No es un email válido"
    }
    if (msg) {
        field.classList.remove("valid")
        field.classList.add("invalid")
        feed.innerText = msg
    }
    else {
        field.classList.remove("invalid")
        field.classList.add("valid")
        feed.innerText = "El campo es correcto"
    }
})
inputs.password.addEventListener('input', function (e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".feed")
    let msg = null
    if (!validator.islength(value, { min: 7 })) {
        msg = "No es un email válido"
    }
    else if (!validator.isEmail(value)) {
        msg = "No es un email válido"
    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let isCorrect = false

    if(e.target.querySelectorAll(".feed.invalid").length < 1){
        isCorrect = true
    }

    if(isCorrect){
        return e.targe.submit()
    }
    
})