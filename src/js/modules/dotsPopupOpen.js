export default () => {
  const dots = document.querySelectorAll('.js-project-desk-dot');
  const mDots = document.querySelectorAll('.js-project-mob-dot');
  const closeDots = document.querySelectorAll('.js-close-dot');
  const tooltips = document.querySelectorAll('.js-modal-popup-tooltip');

  dots.forEach((dot) => {
    dot.addEventListener('mouseenter', () => {
      const ACTIVE_CLASS = 'projects-map__dot--active';

      dots.forEach((dot) => {
        dot.classList.remove(ACTIVE_CLASS);
      })

      dot.classList.add(ACTIVE_CLASS);

      window.addEventListener('click', (e) => {
        if(!e.target.closest('.projects-map__dot') || e.target.closest('.projects-map__dot-popup-close')) {
          dots.forEach((dot) => {
            dot.classList.remove(ACTIVE_CLASS);
          })
        }
      })
    })
  })

  mDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const ELEMENT_CLASS = 'modal-map__dot';
      const ACTIVE_CLASS = 'modal-map__dot--active';

      const activeItem = document.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

      if (activeItem !== dot) activeItem?.classList.remove(ACTIVE_CLASS);

      dot.classList.toggle(ACTIVE_CLASS);
    })
  })

  closeDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      mDots.forEach((dot) => {
        dot.classList.remove('modal-map__dot--active');
      })
    })
  })

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', () => {
      tooltip.classList.add('display-none');
    })
  })
}
