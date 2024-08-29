export default () => {
  const mainSections = document.querySelectorAll('.project-article');
  const isMobile = window.matchMedia('(max-width: 769px)').matches;

  mainSections.forEach((mainSection) => {
    const links = mainSection.querySelectorAll('nav > ul a');
    const divs = mainSection.querySelectorAll('section > div');

    links.forEach((link) => {
      link.addEventListener('click', () => {

        links.forEach((l) => {
          l.classList.remove('_active');
        })

        link.classList.add('_active');
      })
    })

    if(!isMobile) {

      window.addEventListener('scroll', () => {
        divs.forEach((div) => {
          if(isInViewport(div)) {
            const id = div.id;

            links.forEach((l) => {
              l.classList.remove('_active');
            })

            links.forEach((link) => {
              if(link.href.split('#')[1] === id) {
                link.classList.add('_active');
              }
            })
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
  })
}
