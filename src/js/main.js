// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import initMap from './modules/footerMap';
import detectTouch from './modules/detectTouch';
import masks from './modules/masks';
import validation from './modules/validation';

import loaderAnimation from './modules/loaderAnimation';
import scrollToTop from './modules/scrollToTop';
import menuOpen from './modules/menuOpen';
import menuHoverImages from './modules/menuHoverImages';
import setFixedHeader from './modules/setFixedHeader';
import setHeaderPadding from './modules/setHeaderPadding';
import menuLinksOpacity from './modules/menuLinksOpacity';
import introSwiper from './modules/introSwiper';
import openMobileMenu from './modules/openMobileMenu';
import advantagesSwiper from './modules/advantagesSwiper';
import statsAnimations from './modules/statsAnimations';
import projectsAnimation from './modules/projectsAnimation';
import carouselSwiper from './modules/carouselSwiper';
import teamSwiper from './modules/teamSwiper';

import categoryMobileHover from './modules/categoryMobileHover';
import catalogNavItemSwitch from './modules/catalogNavItemSwitch';
import selectSetValue from './modules/selectSetValue';
import subcategoriesViewToggle from './modules/subcategoriesViewToggle';
import productSlider from './modules/productSlider';
import resetGroupForms from './modules/resetGroupForms';

import teamTabsControls from './modules/teamTabsControls';
import aboutCarouselSwiper from './modules/aboutCarouselSwiper';
import aboutTeamMobileSwiper from './modules/aboutTeamMobileSwiper';
import partnersSwiper from './modules/partnersSwiper';

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  detectTouch();
  masks();
  validation();

  setHeaderPadding();
  loaderAnimation();
  menuOpen();
  menuHoverImages();
  scrollToTop();
  setFixedHeader();
  menuLinksOpacity();
  introSwiper();
  openMobileMenu();
  lazyIMages();
  initModal();
  initMap();
  advantagesSwiper();
  statsAnimations();
  projectsAnimation();
  carouselSwiper();
  teamSwiper();

  categoryMobileHover();
  catalogNavItemSwitch();
  selectSetValue();
  subcategoriesViewToggle();
  productSlider();
  resetGroupForms();

  teamTabsControls();
  aboutCarouselSwiper();
  aboutTeamMobileSwiper();
  partnersSwiper();
});
