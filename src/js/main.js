// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import detectTouch from './modules/detectTouch';
import masks from './modules/masks';
import validation from './modules/validation';

import loaderAnimation from './modules/loaderAnimation';
import scrollToTop from './modules/scrollToTop';
import setFixedHeader from './modules/setFixedHeader';
import setHeaderPadding from './modules/setHeaderPadding';
import menuLinksOpacity from './modules/menuLinksOpacity';
import introSwiper from './modules/introSwiper';
import openMobileMenu from './modules/openMobileMenu';
import initMap from './modules/footerMap';
import advantagesSwiper from './modules/advantagesSwiper';

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  detectTouch();
  masks();
  validation();

  setHeaderPadding();
  loaderAnimation();
  scrollToTop();
  setFixedHeader();
  menuLinksOpacity();
  introSwiper();
  openMobileMenu();
  lazyIMages();
  initModal();
  initMap();
  advantagesSwiper();
});
