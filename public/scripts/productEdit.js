let forms = document.forms.back
let inputs = forms.elements;


inputs.nombre.addEventListener('input', function (e) {

let section = dococument.parentElement; //class
let feed = doc.querySelector('.feed')
let msg = null;
if (!validator.isLength(nombre.value,{min:5}))
msg('no tiene suficientes caracteres')
if (msg) {
feed.classList.remove('valid'); 
feed.classList.add('invalid');
feed.innerHTML = msg;
}else {
 feed.classList.remove('valid'); 
feed.classList.add('invalid');
feed.innerHTML = 'campo correcto';
}

 )
inputs.descripcion.addEventListener ('input', function (e) {
    let section = dococument.parentElement; //class
    let feed = doc.querySelector('.feed')
    let msg = null;
    if (!validator.isLength(nombre.value,{min:5}))
    msg('no tiene suficientes caracteres')
    if (msg) {
    feed.classList.remove('valid'); 
    feed.classList.add('invalid');
    feed.innerHTML = msg;
    }else {
     feed.classList.remove('valid'); 
    feed.classList.add('invalid');
    feed.innerHTML = 'campo correcto';
    } 
})
