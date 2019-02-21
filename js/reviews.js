const reviewsItems = document.querySelectorAll('.reviews__item');
const reviewsPopup = document.querySelector('reviews-popup');

for (item of reviewsItems) {
  item.addEventListener('click', e => {
    const reviewsCurItem = e.currentTarget;

    if  (e.currentTarget('.reviews__btn')) {
      reviewsPopup.classList.add('reviews-popup_opened');
    }
  })
}

// reviewsContent.addEventListener('click', e => {
//   reviewsPopup.classList.add('reviews-popup_opened');
// })

// reviewsClose.addEventListener('click', e => {
//   reviewsPopup.classList.remove('reviews-popup_opened');
// })