export default () => {
  const navs = document.querySelectorAll('.js-nav-wrapper');

  navs.forEach((nav) => {
    const btns = nav.querySelectorAll('.js-nav-item > .nav-item__button');
    const ELEMENT_CLASS = 'nav-item__button';
    const ACTIVE_CLASS = 'nav-item__button--active';

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const activeItem = nav.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

        if (activeItem !== btn) activeItem?.classList.remove(ACTIVE_CLASS);

        btn.classList.toggle(ACTIVE_CLASS);
      })
    })

    btns[0].classList.add('nav-item__button--active');

    nav.onreset = (event) => {
      setTimeout(() => {
        btns.forEach((btn) => {
          btn.classList.remove(ACTIVE_CLASS);
        })
      }, 300);
    };
  })
}
