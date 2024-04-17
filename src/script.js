// const burgerIcon = document.querySelector('.navbar-burger');
// const navbarMenu = document.querySelector('#main-menu');

// burgerIcon.addEventListener('click', () => {
//     navbarMenu.classList.toggle('-translate-x-full');
//     navbarMenu.classList.toggle('hidden');
// });

document.addEventListener('DOMContentLoaded', function() {
    googleTranslateElementInit();
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}