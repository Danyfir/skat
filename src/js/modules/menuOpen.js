export default () => {
  const burgers = document.querySelectorAll('.js-burger-menu');

  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {

      if(burger.classList.contains('js-menu-is-open') | burger.classList.contains('js-callback-is-open')) {
        document.body.classList.remove('desktop-menu-is-open');
        document.body.classList.remove('callback-modal-is-open');

        setTimeout(() => {
          burger.classList.remove('js-menu-is-open');
          burger.classList.remove('js-callback-is-open');
        }, 400);

      } else {
        document.body.classList.add('desktop-menu-is-open');

        setTimeout(() => {
          burger.classList.add('js-menu-is-open');
        }, 400);

      }
    })
  })
}
