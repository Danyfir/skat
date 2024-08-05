import Swiper from 'swiper/swiper-bundle';
import { IS_MOBILE as isMobile } from '../helpers/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const teams = document.querySelectorAll('.js-about-team');

  teams.forEach((team) => {
    if(isMobile) {
      team.classList.add('swiper');
      team.querySelector('.about-team__list').classList.add('swiper-wrapper');
      team.querySelectorAll('.about-team__item').forEach((item) => {
        item.classList.add('swiper-slide');
      })

      new Swiper(team, {
        width: 300,
        spaceBetween: 16,
      })
    } else {
      return;
    }
  })
}
