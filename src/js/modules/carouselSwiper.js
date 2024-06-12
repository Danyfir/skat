import Swiper from 'swiper/swiper-bundle';

export default () => {
  const carousels = document.querySelectorAll('.js-carousel-swiper');

  carousels.forEach((carousel) => {
    const swiper = new Swiper(carousel.querySelector('.carousel__swiper.swiper'), {
      spaceBetween: 16,
      slidesPerView: 1.1,

      navigation: {
        prevEl: carousel.querySelector('.slider-buttons__button--prev'),
        nextEl: carousel.querySelector('.slider-buttons__button--next'),
      },

      breakpoints: {
        769: {
          slidesPerView: 4,
        }
      }
    })
  })
}
