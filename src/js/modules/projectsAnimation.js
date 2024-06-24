import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const projectsSections = document.querySelectorAll('.section.projects');

  projectsSections.forEach((projectsSection) => {
    projectsSection.classList.add('js-projects-scroll-animation');

    // const body = projectsSection.querySelector('.projects__body');
    // const heading = projectsSection.querySelector('.projects__item');
    // const tl = gsap.timeline();

    // tl.to(heading, {position: 'fixed'})
    // tl.to(body, {yPercent: -100})

    // ScrollTrigger.create({
    //     animation: tl,
    //     trigger: '.js-projects-scroll-animation',
    //     start: 'top top',
    //     end: `bottom +=0`,
    //     scrub: 1.5,
    //     pin: projectsSection,
    //     anticipatePin: 1,
    //     pinSpacing: true,
    //     markers: true,
    //     onEnter: () => {
    //         projectsSection.classList.remove('projects--animation-trigger');
    //     }
    // });
  })
}
