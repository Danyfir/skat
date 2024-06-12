import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const statsSections = document.querySelectorAll('.section.stats');

  if(window.matchMedia('(max-width: 768px)').matches) return;

  statsSections.forEach((statsSection) => {
    statsSection.classList.add('js-stats-scroll-animation')

    const scrollItems = statsSection.querySelectorAll('.stats__scrolling-item');
    const itemHeight = scrollItems[scrollItems.length - 1].clientHeight;
    const headingsHeight = statsSection.querySelector('.stats__headings').offsetHeight;
    const wrapperHeight = statsSection.querySelector('.stats__scrolling').clientHeight;
    const ulHeight = statsSection.querySelector('.stats__scrolling-list').clientHeight;
    const endHeight = ulHeight - wrapperHeight;
    const scrollHeight = ulHeight - wrapperHeight + (headingsHeight - itemHeight);
    const tl = gsap.timeline();

    tl.to(".stats__scrolling-list", {y: -scrollHeight, duration: 4, stagger: 0.5})

    ScrollTrigger.create({
      animation: tl,
      trigger: '.js-stats-scroll-animation',
      start: 'top top',
      end: `bottom +=${endHeight}`,
      scrub: 2,
      pin: ".page-wrapper",
      anticipatePin: 0.1
    });
  })
}
