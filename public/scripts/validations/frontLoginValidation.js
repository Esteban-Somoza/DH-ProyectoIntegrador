let form = document.forms.login__form
let inputs = form.elements

inputs.email.addEventListener('input', function (e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector("#emailError")
    let msg = null

    if (!validator.isLength(value, { min: 7 })) {
        msg = "No es un email válido"
    }
    else if (!validator.isEmail(value)) {
        msg = "No es un email válido"
    }
    if (msg) {
        field.classList.remove("valid")
        field.classList.add("invalid")
        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
        feed.innerText = msg
    }
    else {
        field.classList.remove("invalid")
        field.classList.add("valid")
        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
    }
})

inputs.password.addEventListener('input', function (e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector("#passwordError")
    let msg = null
    if (!validator.isLength(value, { min: 7 })) {
        msg = "la contraseña tiene menos 8 digitos"
    }
    if (msg) {
        feed.classList.remove("valid")
        feed.classList.add("invalid")
        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
        feed.innerText = msg
    }
    else {
        this.classList.remove("fieldValid")
        this.classList.remove("inv")
        this.classList.add("fieldInvalid")
        feed.classList.remove("invalid")
        feed.classList.add("valid")
    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault()

    let invalids = document.querySelectorAll(".invalid")
    let invalidFields = document.querySelectorAll(".fieldInvalid")
    let isCorrect = false

    if(invalids.length < 1){
        isCorrect = true
    }

    if(isCorrect){
        return e.target.submit()
    }
    else{
        console.log(invalidFields);
        for (let i = 0; i < invalidFields.length; i++) {
            invalidFields[i].classList.add("inv")
        }

        for (let i = 0; i < invalids.length; i++) {
            invalids[i].style.display = "block"
        }

        // Swal.fire({
        //     position: 'center',
        //     icon: 'error',
        //     title: 'Error en los campos',
        //     showConfirmButton: false,
        //     timer: 1500
        // })
    }
})