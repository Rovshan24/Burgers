const consist = document.querySelectorAll('.burgers__consist');
const table = document.querySelectorAll('.burgers__table');
const burgersClose = document.querySelectorAll('.burgers__close');

for (let i = 0; i < consist.length; i++) {
  consist[i].addEventListener('click', e => {
    e.preventDefault();
    table[i].classList.toggle('burgers__table_opened');
  })
}

burgersClose.addEventListener('click', e => {
  table[i].classList.remove('burgers__table_opened');
})