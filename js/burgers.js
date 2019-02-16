const consist = document.querySelector('.burgers__consist');
const table = document.querySelector('.burgers__table');
const burgersClose = document.querySelector('.burgers__close');

consist.addEventListener('click', e => {
  event.preventDefault();
  table.classList.add('burgers__table_opened');
})

// burgersClose.addEventListener('click', e => {
//   event.preventDefault();
//   table.classList.remove('burgers__table_opened');
// })