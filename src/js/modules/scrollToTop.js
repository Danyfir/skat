export default () => {
  const topBtns = document.querySelectorAll('.to-top-btn');

  topBtns.forEach((topBtn) => {
    topBtn.addEventListener('click', () => {
      window.scrollTo(0, 0);
    })
  });
}
