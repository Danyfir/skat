export default () => {
  const inputs = document.querySelectorAll('input[name="list-map-switcher"]');
  const windows = document.querySelectorAll('[data-projects-window]');

  inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      const id = e.target.id;

      windows.forEach((window) => {
        window.classList.add('display-none');
      })

      windows.forEach((window) => {
        if(window.dataset.projectsWindow === id) {
        window.classList.remove('display-none');
        }
      })
    })
  })
}
