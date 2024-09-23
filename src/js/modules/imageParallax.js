import SimpleParallax from "simple-parallax-js/dist/vanilla/simpleParallaxVanilla.es";

export default () => {
  const images = document.querySelectorAll('.parallax-image');

  images.forEach((image) => {
    if(window.matchMedia('(max-width: 768px)').matches) return;

    new SimpleParallax(image, {
      orientation: 'up - down',
      transition: 'ease-out'
    });
  })
}
