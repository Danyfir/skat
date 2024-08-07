import Swiper from 'swiper/swiper-bundle';
import { IS_MOBILE as isMobile } from '../helpers/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const partners = document.querySelectorAll('.js-partner-swiper');

  partners.forEach((partner) => {
    const direction = partner.dataset.direction;

    if(direction) {
      new Swiper(partner, {
        spaceBetween: 27,
        slidesPerView: 'auto',
        speed: 9000,
        freeMode: true,
        loop: true,

        autoplay: {
          delay: 0,
          reverseDirection: true
        },

        breakpoints: {
          769: {
            spaceBetween: 16,
            slidesPerView: 'auto',
          }
        }
      })
    } else {
      new Swiper(partner, {
        spaceBetween: 27,
        slidesPerView: 'auto',
        speed: 9000,
        freeMode: true,
        loop: true,

        autoplay: {
          delay: 0,
          reverseDirection: false
        },

        breakpoints: {
          769: {
            spaceBetween: 16,
            slidesPerView: 'auto',
          }
        }
      })
    }
  })
}
