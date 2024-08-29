export default () => {
  const isMobile = window.matchMedia('(max-width: 769px)').matches;
  const trigger = document.querySelector('.js-categories-scroll');
  const categories = document.querySelectorAll('.category, .projects-link');

  if(!trigger) return;

  if(isMobile) {
    window.addEventListener('scroll', () => {
      categories.forEach((cat) => {
        cat.classList.remove('_hover');
      })

      categories.forEach((category) => {
        if (isInViewport(category)) {
          category.classList.add('_hover');
        }
      })
    })
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
