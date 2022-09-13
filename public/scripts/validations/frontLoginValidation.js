let form = document.forms.login__form
let inputs = form.elements


let userExists = async function (email) {
    let exists = await axios.post(`/api/userExists/${email}`)
    return exists
}

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

let emailNotFound = async function (exists) {
    let field = inputs.email
    let feed = document.querySelector("#emailError")
    let msg = null

    if (!exists.data.exists) {
        msg = "El email no está registrado"
        console.log(msg);
    }

    if (msg) {
        feed.classList.remove("valid")
        feed.classList.add("invalid")
        field.classList.remove("inv")
        field.classList.remove("fieldValid")
        field.classList.add("fieldInvalid")
        feed.innerText = msg
    }

    else {
        feed.classList.remove("invalid")
        feed.classList.add("valid")
        field.classList.remove("inv")
        field.classList.remove("fieldValid")
        field.classList.add("fieldInvalid")
    }
}

inputs.password.addEventListener('input', function (e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector("#passwordError")
    let msg = null
    if (!validator.isLength(value, { min: 7 })) {
        msg = "la contraseña tiene menos 8 digitos"
    }
    if (msg) {
        feed.classList.add("invalid")
        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
        feed.innerText = msg
    }
    else {
        this.classList.remove("inv")
        this.classList.add("fieldInvalid")
        feed.classList.remove("invalid")
        feed.classList.add("valid")
    }
})



form.addEventListener("submit", async function (e) {
    e.preventDefault()
    let email = document.getElementById("email").value
    let exists = await userExists(email)
    emailNotFound(exists)
    // console.log(exists);


    let invalids = document.querySelectorAll(".invalid")
    let invalidFields = document.querySelectorAll(".fieldInvalid")
    let isCorrect = false

    if (invalids.length < 1) {
        isCorrect = true
    }

    if (isCorrect) {
        return e.target.submit()
    }
    else {
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