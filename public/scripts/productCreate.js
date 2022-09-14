 let forms = document.forms.back
 let inputs = forms.elements;


inputs.nombre.addEventListener('input', function (e) {

let section = e.target.parentElement; //class
let value = e.target.value;
let feed = section.querySelector('.feed')
let msg = null;

if (!validator.isLength(nombre.value,{min:5})){
msg ='no tiene suficientes caracteres'}
if (msg) {
feed.classList.remove('valid'),
feed.classList.add('invalid'),
feed.innerText = msg;
}
else {
  feed.classList.remove('invalid'), 
feed.classList.add('valid'),
feed.innerText = 'campo correcto'
} 
})
inputs.avatar.addEventListener('change', function (e) {

 




