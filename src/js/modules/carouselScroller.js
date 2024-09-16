import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const carouselSections = document.querySelectorAll('.js-about-carousel-trigger');

  carouselSections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 0,
      end: 'bottom top',
      scrub: 0,
      onUpdate: (self) => {
        console.log("toggled, isActive:", self.isActive);
      }
    });
  })
}
