import anime from 'animejs';

export default () => {
  const loaders = document.querySelectorAll('.loader');

  loaders.forEach((loader) => {
    const myObject = {
      prop: 100,
    };
    const secDiv = loader.querySelector('[data-loader-ms]');

    const ms = +secDiv.dataset.loaderMs;
    const icon = loader.querySelector('.loader__icon-yellow .icon');


    const animation = anime({
      targets: myObject,
      prop: 0,
      duration: ms,
      easing: 'linear',
      round: 1,

      update: function() {
        icon.style.clipPath = `inset(0 ${myObject.prop}% 0 0)`;
      }
    });

    animation.finished.then(() => {
      setTimeout(() => {
        loader.classList.add('loader--closed');
      }, 400);
      setTimeout(() => {
        loader.remove();
      }, 1000);
    });
  })
}
