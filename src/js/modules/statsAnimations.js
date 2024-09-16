import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const statsSections = document.querySelectorAll('.section.stats');

  if(window.matchMedia('(max-width: 768px)').matches) return;

  statsSections.forEach((statsSection) => {
    statsSection.classList.add('js-stats-scroll-animation')
    const scrollItems = statsSection.querySelectorAll('.js-scrolling-item');
    const itemHeight = scrollItems[scrollItems.length - 1].clientHeight;
    const headingsHeight = statsSection.querySelector('.stats__headings').offsetHeight;
    const wrapperHeight = statsSection.querySelector('.stats__scrolling').clientHeight;
    const ulHeight = statsSection.querySelector('.stats__scrolling-list').clientHeight;
    const scrollHeight = ulHeight - wrapperHeight + (headingsHeight - itemHeight);

    const tl = gsap.timeline();
    tl.to(".stats__scrolling-list", {y: -scrollHeight, duration: 1.5})

    ScrollTrigger.create({
      trigger: '.js-stats-scroll-animation',
      start: "top center+=0%",
      onEnter: () => {
        statsSection.classList.remove('stats--animation-trigger');
      }
    })

    ScrollTrigger.create({
      animation: tl,
      trigger: '.js-stats-scroll-animation',
      start: 'top top',
      end: `bottom +=0`,
      scrub: 1.5,
      pin: statsSection,
      anticipatePin: 1,
      pinSpacing: true,
    });

    scrollItems.forEach((scrollItem) => {
      gsap.set(scrollItem, { scale: 0.8, opacity: 0.2 });

      gsap.to(scrollItem, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: scrollItem,
          start: "top center+=20%",
          end: "bottom center-=10%",
          scrub: 1.5,
          // markers: true
        }
      });
    })
  })
}
