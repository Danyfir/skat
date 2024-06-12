export default () => {
  const labels = document.querySelectorAll('.desktop-menu__link.js-hover-link > label');

  labels.forEach((label) => {
    const menu = label.closest('.desktop-menu__menu');
    const inputs = label.closest('.desktop-menu__row').querySelectorAll('.desktop-menu__input')

    label.addEventListener("mouseenter", (e) => {
      e.target.click();
    })

    menu.addEventListener("mouseleave", () => {
      inputs[0].checked = true;
    })
  })
}
