import Swiper from 'swiper/swiper-bundle';
import { IS_MOBILE as isMobile } from '../helpers/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const containers = document.querySelectorAll('.js-about-carousel-swiper');

  containers.forEach((container) => {
    const optionsMobile = {
      init: false,
      spaceBetween: 16,
      slidesPerView: 1.1,

      pagination: {
        el: '.swiper-pagination',
      },
    };

    const optionsDesktop = {
      init: false,
      spaceBetween: 0,
      slidesPerView: 1,
      speed: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    };

    let swiper;

    if(isMobile) {
      swiper = new Swiper(container, {
        ...optionsMobile,
      })
    } else {
      swiper = new Swiper(container, {
        ...optionsDesktop,
      })
    }

    swiper.init();
  })
}
