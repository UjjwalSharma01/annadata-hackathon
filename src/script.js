const burgerIcon = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('#main-menu');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('-translate-x-full');
    navbarMenu.classList.toggle('hidden');
});