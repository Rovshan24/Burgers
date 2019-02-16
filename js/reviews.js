const reviewsButton = document.querySelectorAll('.reviews__btn_phones');
const reviewsPopup = document.querySelector('.reviews-popup');
const reviewsClose = document.querySelector('.reviews-popup__close');

reviewsButton.addEventListener('click', e => {
  event.preventDefault();
  reviewsPopup.classList.add('reviews-popup_opened');
})

reviewsClose.addEventListener('click', e => {
  event.preventDefault();
  reviewsPopup.classList.remove('reviews-popup_opened');
})