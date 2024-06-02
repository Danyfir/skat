export const IS_FIREFOX = navigator.userAgent.toLowerCase().includes('firefox');
export const IS_MOBILE = window.matchMedia('(max-width: 768px)').matches;
export const IS_TABLET = window.matchMedia('(max-width: 1024px)').matches;
