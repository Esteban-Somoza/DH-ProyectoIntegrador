let form = document.forms.form
let inputs = form.elements

console.log(inputs);

let userExists = async function (email) {
    let exists = await axios.post(`/api/userExists/${email}`)
    return exists
}


let userAlreadyExists = async function (exists) {
    let input = inputs.email
    let feedback = document.querySelector("#emailError")
    let msg = null

    if (exists.data.exists) {
        msg = "El email ya está registrado"
    }

    if (msg) {
        feedback.classList.remove("valid")
        feedback.classList.add("invalid")
        input.classList.remove("inv")
        input.classList.remove("fieldValid")
        input.classList.add("fieldInvalid")
        feedback.innerText = msg
    }

    else {
        feedback.classList.remove("invalid")
        feedback.classList.add("valid")
        input.classList.remove("inv")
        input.classList.remove("fieldValid")
        input.classList.add("fieldInvalid")
    }
}

let fileValidation = function (file) {
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput.value = '';
        return false;
    } else {
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('imagePreview').innerHTML = '<img src="' + e.target.result + '"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

inputs.file.addEventListener('input', function () {
    let file = this.files[0]
    let feedback = document.querySelector("#fileError")
    let msg = null
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

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




inputs.email.addEventListener('input', function () {
    let value = this.value
    let feedback = document.querySelector("#emailError")
    let msg = null

    if (!validator.isLength(value, { min: 7 })) {
        msg = "No es un email válido"
    }
    else if (!validator.isEmail(value)) {
        msg = "No es un email válido"
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


inputs.password.addEventListener('input', function () {
    let value = this.value
    let feedback = document.querySelector("#passwordError")
    let msg = null

    if (value.length < 8) {
    } else {
    }

    if (!validator.isLength(value, { min: 7 })) {
        msg = "La contraseña debe contener al menos 8 digitos"
    }
    console.log(msg);

    if (msg) {
        this.style.color = "maroon"
        this.style.outlineColor = "maroon"
        feedback.classList.add("invalid")

        this.classList.remove("inv")
        this.classList.remove("fieldValid")
        this.classList.add("fieldInvalid")
        feedback.innerText = msg
    }

    else {
        this.style.color = "black"
        this.style.outlineColor = "black"
        this.classList.remove("inv")
        this.classList.add("fieldInvalid")
        feedback.classList.remove("invalid")
        feedback.classList.add("valid")
    }
})


form.addEventListener("submit", async function (e) {
    e.preventDefault()
    
    let inputsTotal = document.querySelectorAll("input")
    if (inputsTotal[1,2,3,4].value == "" ){
        console.log(inputsTotal[1,2,3,4].value == "" );
        
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Complete los campos de Nombre, Apellido, Email y Contraseña',
            showConfirmButton: false,
            timer: 1700
        })

        return 
    }


    let email = document.getElementById("email").value
     console.log(email);
    let exists = await userExists(email)
    userAlreadyExists(exists)


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