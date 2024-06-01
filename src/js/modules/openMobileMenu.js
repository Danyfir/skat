export default () => {
  const btns = document.querySelectorAll('.js-mobile-menu-open');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('mobile-menu-open');
    })
  })
}
