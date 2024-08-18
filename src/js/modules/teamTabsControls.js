export default () => {
  const tabs = document.querySelectorAll('.js-team-tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const dataTab = tab.dataset.teamTab;
      const ELEMENT_CLASS = 'js-team-tab';
      const ACTIVE_CLASS = 'team-section__tab--active';
      const activeItem = document.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

      if (activeItem !== tab) activeItem?.classList.remove(ACTIVE_CLASS);

      tab.classList.toggle(ACTIVE_CLASS);

      if(dataTab) {
        const lists = document.querySelectorAll('[data-team-list]');
        const findedList = document.querySelector(`[data-team-list=${dataTab}]`);

        lists.forEach((list) => {
          list.classList.add('display-none');
        })

        findedList.classList.remove('display-none');
      }
    })
  })
}
