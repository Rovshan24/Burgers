const accoItems = document.querySelectorAll('.accordeon__item');
const accoTrigger = document.querySelectorAll('.accordeon__trigger');

for (const item of accoItems) {
  item.addEventListener('click', e => {
    
    event.preventDefault();

    const curItems = e.currentTarget;
    const contents = curItems.querySelector('.accordeon__desc-wrap');

    if (curItems.classList.contains('accordeon__item_active')) {
      curItems.classList.remove('accordeon__item_active');
    } else {

      Array.from(accoItems).forEach(elem => {
        elem.classList.remove('accordeon__item_active');
      })

      curItems.classList.add('accordeon__item_active');
    }
  })
}