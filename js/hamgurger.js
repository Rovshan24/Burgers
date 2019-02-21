const button = document.querySelector('.hamburger-menu');
const popup = document.querySelector('.full-menu');
const close = document.querySelector('.full-menu__close');

button.addEventListener('click', e => {
  popup.classList.add('full-menu_opened');
})

close.addEventListener('click', e => {
  popup.classList.remove('full-menu_opened');
})