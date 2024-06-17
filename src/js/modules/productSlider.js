import Swiper from 'swiper/swiper-bundle';

export default () => {
    const productSliders = document.querySelectorAll('.js-product-swiper');

    productSliders.forEach((productSlider) => {
        const imageSwiperContainer = productSlider.querySelector('.product-section__image-swiper.swiper');
        const thumbsSwiperContainer = productSlider.querySelector('.product-section__thumbs-swiper.swiper');
        const pagination = productSlider.querySelector('.product-section__pagination > .swiper-pagination');

        let thumbsSwiper = null;

        if(thumbsSwiperContainer) {
            thumbsSwiper = new Swiper(thumbsSwiperContainer, {
                direction: 'vertical',
                slidesPerView: 3,
            })
        }

        const imagesSwiper = new Swiper(imageSwiperContainer, {
            observer: true,
            speed: 600,

            mousewheel: {
                invert: false,
            },

            thumbs: {
                swiper: thumbsSwiper
            },

            pagination: {
                el: pagination,
                type: 'bullets',
            },

            breakpoints: {
                768: {
                    direction: 'vertical',
                }
            }
        });
    })
}
