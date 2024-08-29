import Swiper from 'swiper/swiper-bundle';

export default () => {
  const sections = document.querySelectorAll('.js-carousel-triple-swiper');

  sections.forEach((section) => {
    const swiper = section.querySelector('.carousel__swiper.swiper');

    new Swiper(swiper, {
      slidesPerView: 1.1,
      spaceBetween: 10,

      navigation: {
        nextEl: section.querySelector('.slider-buttons__button.slider-buttons__button--next'),
        prevEl: section.querySelector('.slider-buttons__button.slider-buttons__button--prev'),
      },

      breakpoints: {
        769: {
          slidesPerView: 3,
          spaceBetween: 16,
        }
      }
    })
  })
}
