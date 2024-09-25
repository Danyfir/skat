export function callbackForm() {
  const forms = document.querySelectorAll('.js-callback-form');

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      fetch(location.href, {
        method: 'POST',
        body: new FormData(form)
      })
        .then(response => {
          callbackAnswer('success');
          form.reset();
        })
        .catch(error => {
          callbackAnswer('error');
          console.log(error)
        })

    })
  })
}

export function closeCallbackAnswer() {
  const closeBtns = document.querySelectorAll('.js-close-callback');
  const burgers = document.querySelectorAll('.js-burger-menu, .js-mobile-menu-open');
  const cols = document.querySelectorAll('.desktop-menu__col');

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      document.body.classList.remove('desktop-menu-is-open');
      document.body.classList.remove('callback-modal-is-open');

      setTimeout(() => {
        burgers.forEach((burger) => {
          burger.classList.remove('js-menu-is-open');
          burger.classList.remove('js-callback-is-open');
        })
      }, 400);

      cols.forEach((col) => {
        col.classList.add('display-none');
      })

      cols.forEach((col) => {
        if(col.classList.contains('desktop-menu__callback-form')) {
          col.classList.remove('display-none');
        }
      })
    })
  })
}

export function reloadCallbackForm() {
  const reloadBtns = document.querySelectorAll('.js-back-callback');
  const cols = document.querySelectorAll('.desktop-menu__col');

  reloadBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      cols.forEach((col) => {
        col.classList.add('display-none');
      })

      cols.forEach((col) => {
        if(col.classList.contains('desktop-menu__callback-form')) {
          col.classList.remove('display-none');
        }
      })
    })
  })
}

export default function callbackAnswer(status) {
  const cols = document.querySelectorAll('.desktop-menu__col');

  if(status === "success") {
    resetCols();

    cols.forEach((col) => {
      if(col.classList.contains('desktop-menu__success')) {
        col.classList.remove('display-none');
      }
    })
  } else if(status === "error") {
    resetCols();

    cols.forEach((col) => {
      if(col.classList.contains('desktop-menu__error')) {
        col.classList.remove('display-none');
      }
    })
  }

  function resetCols() {
    cols.forEach((col) => {
      col.classList.add('display-none');
    })
  }
}

window.callbackAnswer = callbackAnswer;
// window.callbackAnswer('error');
// window.callbackAnswer('success');
