let forms = document.querySelector('.formulario')
let inputs = forms.elements;


inputs.nombre.addEventListener('input', function (e) {

  let section = e.target.parentElement; //class
  let value = this.value;
  let feedback = section.querySelector('#nombreError')
  let msg = null;

  if (!validator.isLength(value, { min: 5 })) {
    msg = 'Debe tener al menos 5 caracteres'
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


inputs.marca.addEventListener('input', function (e) {

  let section = e.target.parentElement; //class
  let value = this.value;
  let feedback = section.querySelector('#marcaError')
  let msg = null;

  if (!validator.isLength(value, { min: 2 })) {
    msg = 'Debe tener al menos 2 caracteres'
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

inputs.description.addEventListener('input', function (e) {
  let section = e.target.parentElement
  let value = this.value;
  let feedback = section.querySelector('#descripcionError');
  let msg = null;

  if (!validator.isLength(value, { min: 20 })) {
    msg = 'Debe tener al menos 20 caracteres'
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



inputs.imagenProducto.addEventListener('input', function () {
  let file = this.files[0]
  let feedback = document.querySelector("#imagenError")
  let msg = null
  let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  console.log(file);

  if (!file) {
    msg = "Debe insertar una imagen"
  }

  if (file.size > 3145728) {
    msg = "El archivo debe pesar menos que 3mb"
  }

  if (!allowedExtensions.exec(file.name)) {
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


forms.addEventListener("submit", function (e) {
  e.preventDefault()
  console.log("sdi");

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


