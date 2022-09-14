let form = document.querySelector('#form');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let contrasenia = document.getElementById('contraseña');
let telefono = document.getElementById('telefono');
let ubicacion = document.getElementById('ubicacion');
let botonSubmit = document.querySelector('.form__boton');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let errors = false
    if (email.value.length <= 0) {
        errors = 1
        email.style.backgroundColor = 'tomato'
    }

    if (email.value.length == !validator.isLength(email.value, { min: 7 })) {
        errors = true
        alert('no tiene suficiente caracteres')
    }
    
    else if (email.value == !validator.isEmail(email.value)) {
        errors = true
        alert('no es un email valido')
    }

    if (nombre.value.length < 2) {
        errors = true
        alert('El nombre debe contener al menos 2 letras');
        nombre.style.backgroundColor = 'tomato'
    }
    else if (!nombre.value.length < 2) {

    }
    if (apellido.value.length < 2) {
        errors = true
        alert('El apellido debe contener al menos 2 letras');
        apellido.style.backgroundColor = 'tomato'
    }
    else if (!apellido.value.length < 2) {

    }
    if (contrasenia.value.length < 8) {
        errors = true
        alert('La contraseña debe contener al menos 8 caracteres');
        contrasenia.style.backgroundColor = 'tomato'
        let pass = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
        if (!contrasenia.value == pass) {
            alert('La contraseña debe contener al menos 1 numero y una mayuscula')
        }
    }
    if (errors == false) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario guardado con exito',
            showConfirmButton: false,
            timer: 1500
        })
            .then(() => {
                setTimeout(() => {
                    e.target.submit()

                }, 500);
            })
    }
    if (errors == true) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Complete los campos',
            showConfirmButton: false,
            timer: 1500
        })
            .then(() => {
            })
    }
})














