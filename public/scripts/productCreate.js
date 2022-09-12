
// let document.querySelectorById('formulario');
let forms = Document.forms.formulario
let inputs = forms.elements
console.log(inputs)
inputs.nombre.addEventListener('input', function (e) {{
   let value= e.target.value;
     let nombre = e.target.parentElement // color 
     let feed = formulario.querySelector('.formulario')
     let msg= null;
     if (!validator.isLength(value,{min:5}))
     msg= 'No hay suficientes caracteres';
      if (msg) {


     
      }
     }
   })
