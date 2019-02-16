const items = document.querySelectorAll('.menu__item');

for (const item of items) {
  item.addEventListener('click', e => {
    
    event.preventDefault();

    const curItem = e.currentTarget;
    const content = curItem.querySelector('.menu__desc-wrap');

    if (curItem.classList.contains('menu__item_active')) {
      curItem.classList.remove('menu__item_active');
      content.style.width = 0;
    } else {

      Array.from(items).forEach(elem => {
        elem.classList.remove('menu__item_active');
        elem.querySelector('.menu__desc-wrap').style.width = 0;
      })

      curItem.classList.add('menu__item_active');
      content.style.width = "540px";
    }
  })
}