import Swiper from 'swiper/swiper-bundle';

export default () => {
  const carousels = document.querySelectorAll('.js-project-carousel');

  carousels.forEach((carousel) => {
    const main =carousel.querySelector('.js-main-project-swiper');
    const thumbs =carousel.querySelector('.js-thumbs-project-swiper');

    const swiper = new Swiper(thumbs, {
      spaceBetween: 16,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(main, {
      slidesPerView: 1.15,
      spaceBetween: 10,
      watchSlidesProgress: true,

      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },

      thumbs: {
        swiper: swiper,
      },

      breakpoints: {
        769: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      },

      on: {
        init: function () {
          const slides = carousel.querySelectorAll('.swiper.js-thumbs-project-swiper .swiper-slide');

          slides.forEach((slide, index) => {
            slide.addEventListener('mouseover', () => {
              this.slideTo(index);
            })
          })
        },
      },
    });
  })
}
