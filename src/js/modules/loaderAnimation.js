import anime from 'animejs';

export default () => {
  const loaders = document.querySelectorAll('.loader');
  const header = document.querySelector('.header');
  const body = document.body;

  loaders.forEach((loader) => {
    setTimeout(() => {
      const myObject = {
        prop: 0,
      };
      const secDiv = loader.querySelector('[data-loader-ms]');
      const logoWrapper = loader.querySelector('.loader__icon');
      const ms = +secDiv.dataset.loaderMs;
      const icon = loader.querySelector('.loader__icon-yellow');

      const animation = anime({
        targets: myObject,
        prop: 100,
        duration: ms,
        easing: 'linear',
        round: 1,

        update: function() {
          icon.style.width = `${myObject.prop}%`;
        }
      });

      animation.finished.then(() => {
        const svg = loader.querySelector('.loader__icon-yellow > .icon');
        const target = document.querySelector('.header__logo.logo > .icon');
        const rectTarget = target.getBoundingClientRect();

        const iconRect = svg.getBoundingClientRect();
        const cloneIcon = svg.cloneNode(true);

        cloneIcon.style.top = iconRect.top;
        cloneIcon.style.left = iconRect.left;
        cloneIcon.style.width = iconRect.width;
        cloneIcon.style.height = iconRect.height;
        cloneIcon.classList.add('flying-icon');
        logoWrapper.style.opacity = '0';

        setTimeout(() => {
          cloneIcon.style.width = rectTarget.width;
          cloneIcon.style.height = rectTarget.height;
          cloneIcon.style.top = rectTarget.top;
          cloneIcon.style.left = rectTarget.left;
        }, 800);

        document.body.append(cloneIcon);

        setTimeout(() => {
          loader.classList.add('loader--closed');
        }, 400);

        setTimeout(() => {
          body.classList.remove('animation-trigger');
        }, 2000);

        setTimeout(() => {
          cloneIcon.style.opacity = '0';
          header.classList.remove('header-is-animated');
        }, 2500);

        setTimeout(() => {
          cloneIcon.remove();
          loader.remove();
        }, 4000);
      });
    }, 300);
  })
}
