export default () => {
  const btns = document.querySelectorAll('.js-mobile-menu-open');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.body.classList.add('mobile-menu-open');

      if(btn.classList.contains('js-mob-menu-is-open') | btn.classList.contains('js-callback-is-open')) {
        document.body.classList.remove('mobile-menu-open');
        document.body.classList.remove('callback-modal-is-open');

        setTimeout(() => {
          btn.classList.remove('js-mob-menu-is-open');
          btn.classList.remove('js-callback-is-open');
        }, 400);
      } else {
        document.body.classList.add('mobile-menu-open');

        setTimeout(() => {
          btn.classList.add('js-mob-menu-is-open');
        }, 400);
      }
    })
  })
}
