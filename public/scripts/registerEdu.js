let forms = document.forms.news
let inputs = forms.elements

inputs.email.addEventListener('input', function(e) {
   let field = e.target.parentElement
   let value = e.target.value
   let feed = field.querySelector('.feed')
   let msg = null
   if (!validator.isLength(value,{min:7})) {
      msg='no tienes suficientes caracteres'}
      else if(!validator.isEmail(value)){
         msg = 'no es un email valido'
      
   }
   if (msg) {
      field.classList.remove('valid')
      field.classList.add('invalid')
      feed.innerText = msg
   }else {
      field.classList.remove('invalid')
      field.classList.add('valid')
      feed.innerText = 'el campo es correcto'
   }

})

forms.addEventListener('submit', function(e) {
   
   if (!errors) {
    e.target.submit
   }
      

})
   
   
   
