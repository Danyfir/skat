import Swiper from 'swiper/swiper-bundle';

export default () => {
  const advantagesWrappers = document.querySelectorAll('.js-advantages-swiper-wrapper');

  advantagesWrappers.forEach((wrapper) => {
    const swiperBox = wrapper.querySelector('.advantages__swiper.swiper');

    const swiper = new Swiper(swiperBox, {
      speed: 800,
      spaceBetween: 24,
      slidesPerView: 1.1,

      breakpoints: {
        640: {
          slidesPerView: 3.1,
          spaceBetween: 40
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });
  })
}
