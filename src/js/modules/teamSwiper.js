import Swiper from 'swiper/swiper-bundle';

export default () => {
  const teams = document.querySelectorAll('.js-team-slider');

  teams.forEach((team) => {
    const isOthers = team.classList.contains('others');

    const swiper = new Swiper(team.querySelector('.swiper'), {
      spaceBetween: 16,
      slidesPerView: 1.1,

      breakpoints: {
        769: {
          slidesPerView: isOthers ? 3 : 4,
        }
      }
    })
  })
}
