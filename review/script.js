var swiper = new Swiper('.swiper-initialize', {
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    1920: {
      slidesPerView: 5
    },
    992: {
      slidesPerView: 3
    },
    320: {
      slidesPerView: 2
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});