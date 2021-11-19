let button = document.querySelector('.hamburger');
let buttonClose = document.querySelector('.fullscreen-menu__close');
let menu = document.querySelector('.fullscreen-menu');
let body = document.querySelector('body');

let _toggleMenu = function (e) {
    button.classList.toggle('.hamburger');
    buttonClose.classList.toggle('.fullscreen-menu__close');
    menu.classList.toggle('active');
    body.classList.toggle('body-active-menu');
}

button.addEventListener('click', _toggleMenu)
buttonClose.addEventListener('click', _toggleMenu)