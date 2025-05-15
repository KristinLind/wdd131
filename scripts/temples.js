const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuButton.textContent = navMenu.classList.contains('open') ? '🆗' : '☰';
});

const yearSpan = document.querySelector('#year');
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.querySelector('#lastModified');
modifiedSpan.textContent = document.lastModified;