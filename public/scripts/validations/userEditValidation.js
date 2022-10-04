let form = document.forms.form
let inputs = form.elements

console.log(inputs, form);

inputs.file.addEventListener('input', function () {
    let file = this.files[0]
    let feedback = document.querySelector("#fileError")
    let msg = null
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    console.log(file);

    if(!file) return

    if (file.size >  3145728  ) {
        msg = "El archivo debe pesar menos que 3mb"
    }
    
    if(!allowedExtensions.exec(file.name)){
        msg = "formatos de archivos correctos: .jpeg, .png, .gif or .jpg"
    }

    if (msg) {
        this.style.color = "maroon"
        this.style.outlineColor = "maroon"
        feedback.classList.remove("valid")
        feedback.classList.add("invalid")
        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
        feedback.innerText = msg
    }
    else {
        this.style.color = "black"
        this.style.outlineColor = "black"
        feedback.classList.remove("invalid")
        feedback.classList.add("valid")
        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
    }

})


inputs.nombre.addEventListener('input', function () {
    let value = this.value
    let feedback = document.querySelector("#nombreError")
    let msg = null

    if (!validator.isLength(value, { min: 2 })) {
        msg = "El nombre debe contener al menos 2 caracteres."
    }

    if (msg) {
        this.style.color = "maroon"
        this.style.outlineColor = "maroon"
        feedback.classList.remove("valid")
        feedback.classList.add("invalid")
        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
        feedback.innerText = msg
    }
    else {
        this.style.color = "black"
        this.style.outlineColor = "black"
        feedback.classList.remove("invalid")
        feedback.classList.add("valid")
        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
    }
})


inputs.apellido.addEventListener('input', function () {
    let value = this.value
    let feedback = document.querySelector("#apellidoError")
    let msg = null

    if (!validator.isLength(value, { min: 2 })) {
        msg = "El apellido debe contener al menos 2 caracteres."
    }

    if (msg) {
        this.style.color = "maroon"
        this.style.outlineColor = "maroon"
        feedback.classList.remove("valid")
        feedback.classList.add("invalid")
        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
        feedback.innerText = msg
    }
    else {
        this.style.color = "black"
        this.style.outlineColor = "black"
        feedback.classList.remove("invalid")
        feedback.classList.add("valid")
        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
    }
})

form.addEventListener("submit", async function (e) {
    e.preventDefault()

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
        for (let i = 0; i < invalidFields.length; i++) {
            invalidFields[i].classList.add("inv")
        }

        for (let i = 0; i < invalids.length; i++) {
            invalids[i].style.display = "block"
        }
    }
})