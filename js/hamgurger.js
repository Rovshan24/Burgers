const button = document.querySelector('.hamburger-menu');
const popup = document.querySelector('.full-menu');
const close = document.querySelector('.full-menu__close');

button.addEventListener('click', e => {
  popup.classList.add('opened');
})

close.addEventListener('click', e => {
  popup.classList.remove('opened');
})

