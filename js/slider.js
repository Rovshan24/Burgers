class Slider {
  constructor(selector, settings) {
    this.container = document.querySelector(selector);
    this.burgersItems = this.container.querySelectorAll('li');
    this.currentItem = 0;
    this.settings = settings;
    this.left = document.querySelector('.arrow_left');
    this.right = document.querySelector('.arrow_right');

    this.left.addEventListener('click', (e) => {
      e.preventDefault();
        this.slideTo('prev');      
    })

    this.right.addEventListener('click', (e) => {
      e.preventDefault();
      this.slideTo('next');    
    })
  }

  slideTo(vector) {
    if (vector === "next") {
      this.currentItem++;
    } else {
      this.currentItem--;
    }

    if (this.currentItem === this.burgersItems.length) {
      this.currentItem = 0;
    }

    if (this.currentItem < 0) {
      this.currentItem = this.burgersItems.length -1;
    }

    console.log(this.currentItem);
    this.translate();
  }

  translate() {
    for (let i = 0; i < this.burgersItems.length; i++) {
      this.burgersItems[i].classList.remove('burgers__item_active');
    }

    this.burgersItems[this.currentItem].classList.add('burgers__item_active');
  }
}

new Slider('.burgers__slider', {
  autoslide: false
})

// $(function () {
//   $('.arrow_right').on('click', function(e){
//     e.preventDefault();

//     var $this = $(this),
//       burgersSlider = $this.closest('.burgers__slider');
//       burgersItem = burgersSlider.find('.burgers__item'),
//       activeSlide = burgersItem.filter('.burgers__item_active'),

//     activeSlide.removeClass('burgers__item_active');
//     reqItem.addClass('burgers__item_active');
      
//   })
// })