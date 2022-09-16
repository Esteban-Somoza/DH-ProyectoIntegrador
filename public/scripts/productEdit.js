let forms = document.querySelector('.formulario')
let inputs = forms.elements;


inputs.nombre.addEventListener('input', function (e) {

  let section = e.target.parentElement;
  let value = this.value;
  let feed = section.querySelector('#nombreError')
  let msg = null;

  if (!validator.isLength(value, { min: 5 })) {
    msg = 'no tiene suficientes caracteres'
  }
  if (msg) {
    feed.classList.remove('valid')
    feed.classList.add('invalid')
    this.classList.remove("inv")
    this.classList.remove("fieldValid")
    this.classList.add("fieldInvalid")

    feed.innerText = msg;
  }
  else {
    feed.classList.remove('invalid'),
      feed.classList.add('valid'),
      feed.innerText = 'campo correcto'
  }
})

inputs.description.addEventListener('input', function (e) {
  alert('algo esta mal')
  let section = e.target.parentElement
  let value = this.value;
  let feed = section.querySelector('#descripcionError');
  let msg = null;

  if (!validator.isLength(value, { min: 20 })) {
    msg = 'no tiene suficientes caracteres'
  }
  if (msg) {
    feed.classList.remove('valid')
    feed.classList.add('invalid')
    this.classList.remove("inv")
    this.classList.remove("fieldValid")
    this.classList.add("fieldInvalid")

    feed.innerText = msg;
  }
  else {
    feed.classList.remove('invalid'),
      feed.classList.add('valid'),
      feed.innerText = 'campo correcto'
  }

})



inputs.imagenProducto.addEventListener('change', function (e) {
  let section = e.target.parentElement; //selector 
  let files = this.files
  let feed = section.querySelector('#imagenError')
  let msg = null;
  if (files.length == 0) {
    msg = "tenes que subir un archivo"
  }
  else if (!validator.isMineType(files[0].size > 2097152)) {
    msg = "no es un archivo valido"
  }
  if (msg) {
    feed.classList.remove('valid')
    feed.classList.add('invalid')
    this.classList.remove("inv")
    this.classList.remove("fieldValid")
    this.classList.add("fieldInvalid")

    feed.innerText = msg;
  }
  else {
    feed.classList.remove('invalid'),
      feed.classList.add('valid'),
      feed.innerText = 'campo correcto'
  }




  form.addEventListener("submit", function (e) {
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
})

