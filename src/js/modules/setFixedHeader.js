import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const header = document.querySelector('header');
    if(!header) return;

    const vh = (coef) => window.innerHeight * (coef/100);

    const strHeader = ScrollTrigger.create({
      trigger : document.querySelector('.page-wrapper'),
      start: header.offsetHeight + ' top',
      onUpdate: (self) => {
        header.classList.add('header--fixed');
      },
      onLeaveBack: () => {
          header.classList.remove('header--fixed');
      },
      // markers: true,
  });
}
