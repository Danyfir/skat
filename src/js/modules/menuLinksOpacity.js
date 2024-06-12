export default () => {
  const containers = document.querySelectorAll('.js-hover-opacity');

  containers.forEach((container) => {
    const siblings = el => [].slice.call(el.parentNode.children).filter(child => (child !== el));
    const links = container.querySelectorAll('.js-hover-link');

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        siblings(link).forEach(el => {
          el.classList.add('_low-opacity');
        })
      })
      link.addEventListener('mouseleave', () => {
        siblings(link).forEach(el => {
          el.classList.remove('_low-opacity');
        })
      })
    })
  })
}
