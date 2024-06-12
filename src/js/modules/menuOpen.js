export default () => {
  const burgers = document.querySelectorAll('.js-burger-menu');

  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      document.body.classList.toggle('desktop-menu-is-open');
    })
  })
}
