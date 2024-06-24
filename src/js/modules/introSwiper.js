import Swiper from 'swiper/swiper-bundle';
import { IS_MOBILE as isMobile } from '../helpers/utils';

export default () => {
  const swiperContainers = document.querySelectorAll('.js-intro-swiper-box');
  const isHoverableDevice = window.matchMedia(
    '(hover: hover) and (pointer: fine)'
  )

  swiperContainers.forEach((swiperContainer) => {
    const imageSwiperBox = swiperContainer.querySelector('.intro__image-swiper.swiper');

    if(isMobile) {
      const imagesSwiper = new Swiper(imageSwiperBox, {
        pagination: {
          el: '.swiper-pagination',
        },
      })
    } else {
      const imagesSwiper = new Swiper(imageSwiperBox, {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },

        pagination: {
          el: '.swiper-pagination',
        },

        on: {
          init: function () {
            const thumbs = document.querySelectorAll('.intro__thumbs.card');

            thumbs.forEach((thumb) => {
              thumb.addEventListener('mouseenter', () => {
                if(!isHoverableDevice) {
                  return;
                } else {
                  const id = Array.from(thumbs).indexOf(thumb);

                  thumbs.forEach((thumb) => {
                    thumb.classList.remove('card--hover');
                  })

                  thumb.classList.add('card--hover');

                  imagesSwiper.slideTo(id);
                }
              });

              thumb.addEventListener('click', (e) => {
                e.preventDefault();

                const linkHref = thumb.href;
                const id = Array.from(thumbs).indexOf(thumb);

                if(thumb.classList.contains('card--hover')) {
                  window.location.href = linkHref;
                }

                thumbs.forEach((thumb) => {
                  thumb.classList.remove('card--hover');
                })

                thumb.classList.add('card--hover');
                imagesSwiper.slideTo(id);
              })
            })
          },
        },
      })
    }
  })
}
