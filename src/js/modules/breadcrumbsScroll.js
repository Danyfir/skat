export default () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const breadcrumbsList = document.querySelector('.breadcrumbs__list');

  if(isMobile && breadcrumbsList) {
    breadcrumbsList.scrollLeft = breadcrumbsList.offsetWidth;
  }
}
