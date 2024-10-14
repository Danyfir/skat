export default function renderYandexMapApi(containerSelector, callback) {
  const mapsWrappers = document.querySelectorAll(containerSelector);

  if(mapsWrappers.length > 0) {
    const apiKey = mapsWrappers[0].getAttribute('data-api-key');
    if (!apiKey) {
      console.warn(`Не указан API-ключ (data-api-key) для Яндекс карт ${containerSelector}`)
      return;
    }

    function init() {
      const script = document.createElement('script');
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
      script.onload = callback;
      document.body.append(script);
    }

    function onScroll() {
      if (window.scrollY > 100) {
        init();
        window.removeEventListener('scroll', onScroll);
      }
    }

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    onScroll();
  }
}
