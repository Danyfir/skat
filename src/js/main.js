// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import detectTouch from './modules/detectTouch';
import setHeaderPadding from './modules/setHeaderPadding';
import menuLinksOpacity from './modules/menuLinksOpacity';
import openMobileMenu from './modules/openMobileMenu';
import initMap from './modules/footerMap';
import advantagesSwiper from './modules/advantagesSwiper';

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  detectTouch();
  setHeaderPadding();
  menuLinksOpacity();
  openMobileMenu();
  lazyIMages();
  initModal();
  initMap();
  advantagesSwiper();
});
