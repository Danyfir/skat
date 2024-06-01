export default function renderYandexMapApi(params) {
  const mapsWrappers = document.querySelectorAll('.js-footer-map');

  if(mapsWrappers.length > 0) {
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=72c05200-f928-4e05-aed9-e60fedabd791&lang=ru_RU";
    document.body.append(script);

    script.onload = () => {
      return true;
    }
  }
}
