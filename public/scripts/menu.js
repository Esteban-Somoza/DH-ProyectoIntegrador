const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
   
    if (menu.classList.contains('active')){
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
    else {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
})
