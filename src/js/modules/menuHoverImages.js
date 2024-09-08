export default () => {
  const labels = document.querySelectorAll('.desktop-menu__link.js-hover-link > label');
  const links = document.querySelectorAll('.desktop-menu__link');

  labels.forEach((label) => {
    const menu = label.closest('.desktop-menu__menu');
    const inputs = label.closest('.desktop-menu__row').querySelectorAll('.desktop-menu__input')

    label.addEventListener("mouseover", (e) => {
      e.target.click();

      links.forEach((link) => {
        link.addEventListener('click',  transitionLinks(e, link))
      })

      setTimeout(() => {
        label.classList.add('desktop-menu__label--clicked');
      }, 0);
    })

    function transitionLinks(event, link) {
      event.preventDefault();

      const href = link.getAttribute("href");
      const path = link.pathname;

      labels.forEach( (label) => {
        label.classList.remove('desktop-menu__label--clicked');
      })
    }

    menu.addEventListener("mouseleave", () => {
      inputs[0].checked = true;
    })
  })
}
