const {Swiper} = window;

const initCoachesSlider = () => {
  window.coachesSlider = new Swiper('.slider-coaches', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 2,
        spaceBetween: 32,
      },

      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

const initReviewsSlider = () => {
  window.reviewsSlider = new Swiper('.slider-reviews', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export {initCoachesSlider, initReviewsSlider};
