export function addTagToInput() {
  const tags = document.querySelectorAll('.js-search-tag');
  const input = document.querySelector('.js-search-tag-target');

  if(!input) return;

  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      input.value = '';
      input.value = tag.textContent;
    })
  })
};

export function toggleSearchedLists() {
  const items = document.querySelectorAll('.search-section__result-item');
  const btns = document.querySelectorAll('.search-section__result-btn');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nav = btn.parentElement;
      const ELEMENT_CLASS = 'search-section__result-btn';
      const ACTIVE_CLASS = '_active';
      const dataAt = btn.dataset.searchedBtn;

      const activeItem  = nav.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

      if(activeItem !== btn) activeItem?.classList.remove(ACTIVE_CLASS);

      btn.classList.toggle(ACTIVE_CLASS);

      if(dataAt && dataAt === 'grid') {
        items.forEach((item) => {
          item.classList.add('display-none');
        })

        items.forEach((item) => {
          if(item.classList.contains('search-section__result-grid')) {
            item.classList.remove('display-none');
          }
        })
      } else if(dataAt && dataAt === 'list') {
        items.forEach((item) => {
          item.classList.add('display-none');
        })

        items.forEach((item) => {
          if(item.classList.contains('search-section__result-list')) {
            item.classList.remove('display-none');
          }
        })
      } else {
        return;
      }
    })
  })
};

export function clearResenteSearched() {
  const clears = document.querySelectorAll('.js-clear-search-results');

  clears.forEach((clear) => {
    clear.addEventListener('click', () => {
      clear.closest('.search-section__previously-searched.previously-searched').remove();
    })
  })
};


export function clearResenteInput() {
  const clearBtns = document.querySelectorAll('.js-clear-search-input');

  clearBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if( btn.closest('.input') && btn.closest('.input').querySelector('input') ) {
        btn.closest('.input').querySelector('input').value = '';
      }
    })
  })
}
