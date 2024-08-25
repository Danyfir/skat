export default () => {
  const modalButtons = document.querySelectorAll('.js-callback-modal-open');
  const burgers = document.querySelectorAll('.js-burger-menu, .js-mobile-menu-open');

  modalButtons.forEach((modalButton) => {
    modalButton.addEventListener('click', () => {
      document.body.classList.add('callback-modal-is-open');
      document.body.classList.remove('desktop-menu-is-open');

      burgers.forEach((burger) => {
        burger.classList.add('js-callback-is-open');
      })
    })
  })
}
