import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const projectsSections = document.querySelectorAll('.section.about-projects');

  projectsSections.forEach((projectsSection) => {
    if(window.matchMedia('(max-width: 768px)').matches) return;

    projectsSection.classList.add('js-projects-scroll-animation');

    const items = projectsSection.querySelectorAll('.about-projects__project');
    const body = projectsSection.querySelector('.about-projects__scrolling');
    const gapPx = window.getComputedStyle(body,null).getPropertyValue("gap");
    const gap = +window.getComputedStyle(body,null).getPropertyValue("gap").substring(0, gapPx.length - 2);
    const bodyHeight = body.clientHeight;
    const tl = gsap.timeline();

    tl.to(body, {y: -((bodyHeight + gap) * (items.length - 1))})

    ScrollTrigger.create({
        animation: tl,
        trigger: '.js-projects-scroll-animation',
        start: "center center",
        scrub: 2.5,
        pin: projectsSection,
        anticipatePin: 0.5,
        pinSpacing: true,
        // markers: true,
        onEnter: () => {
          projectsSection.classList.remove('projects--animation-trigger');
        }
    });
  })
}
