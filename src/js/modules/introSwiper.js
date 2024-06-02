import Swiper from 'swiper/swiper-bundle';
import { IS_FIREFOX as isFirefox, IS_MOBILE as isMobile } from '../helpers/utils';

export default () => {
  const swiperContainers = document.querySelectorAll('.js-intro-swiper-box');

  swiperContainers.forEach((swiperContainer) => {
    const imageSwiperBox = swiperContainer.querySelector('.intro__image-swiper.swiper');

    if(isFirefox == true) {
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
                thumb.addEventListener('mouseenter', (e) => {
                  const id = Array.from(thumbs).indexOf(thumb);

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
    } else {
      const imagesSwiper = new Swiper(imageSwiperBox, {
        effect: 'creative',
        creativeEffect: {
          prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 0, -400],
          },
          next: {
            // will set `translateX(100%)` on next slides
            translate: ['100%', 0, 0],
          },
        },

        pagination: {
          el: '.swiper-pagination',
        },

        breakpoints: {
          768: {
            parallax: true,
          }
        },

        on: {
          init: function () {
            const thumbs = document.querySelectorAll('.intro__thumbs.card');

            thumbs.forEach((thumb) => {
              thumb.addEventListener('mouseenter', (e) => {
                const id = Array.from(thumbs).indexOf(thumb);

                thumbs.forEach((thumb) => {
                  thumb.classList.remove('card--hover');
                })

                thumb.classList.add('card--hover');

                imagesSwiper.slideTo(id, 1000);
              })
            })
          },
        },
      })
    }
  })
}
