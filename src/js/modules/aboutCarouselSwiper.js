import gsap from 'gsap';
import Swiper from 'swiper/swiper-bundle';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { IS_MOBILE as isMobile } from '../helpers/utils';

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const containers = document.querySelectorAll('.js-about-carousel-swiper');

  containers.forEach((container) => {
    const carouselSection = container.closest('.js-about-carousel-trigger');

    const optionsMobile = {
      init: false,
      spaceBetween: 16,
      slidesPerView: 1.1,

      pagination: {
        el: '.swiper-pagination',
      },
    };

    const optionsDesktop = {
      spaceBetween: 0,
      slidesPerView: 1,
      // loop: true,
      effect: 'fade',

      fadeEffect: {
        crossFade: true
      },
    };

    let swiper;

    if(isMobile) {
      swiper = new Swiper(container, {
        ...optionsMobile,
      });

      swiper.init();
    } else {
      swiper = new Swiper(container, {
        ...optionsDesktop,
      });
    }

    if(carouselSection && !isMobile) {
      ScrollTrigger.observe({
        target: window,
        type: "wheel,touch",
        tolerance: 10,
        onUp: () => {
          swiper.slidePrev(500);

          if(swiper.isBeginning) {
            swiper.slideReset(1);
          }
        },
        onDown: () => {
          swiper.slideNext(500);

          if(swiper.isEnd) {
            swiper.slideReset();
          }
        },
      });
    }
  })
}
