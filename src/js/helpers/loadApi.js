export default function loadApi(name, url, callback) {
  const apiLoaded = name + 'Loaded';
  if (!window[apiLoaded]) {
    const script = document.createElement('script');

    window[apiLoaded] = true;

    script.src = url;
    script.onload = callback;

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
  }
}
