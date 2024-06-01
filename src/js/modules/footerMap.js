export default () => {
    const elements = document.querySelectorAll('.js-footer-map');

    elements.forEach(element => {
      ymaps.ready(initContactsMap);

      function initContactsMap() {

          const mapData = window.mapData ?? null;
          if (!mapData) return;

          const zoom = window.mapZoom ?? 14,

              center = window.mapCenter,

              mapInstance = new ymaps.Map(element, {
                  center: center,
                  zoom: zoom,
                  controls: []
              }),

              HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
                  "<div class='inner-hint'>" +
                      "<p class='inner-hint__title'>Адрес:</p>" +
                      "<p class='inner-hint__address'>{{ properties.address }}</p>" +
                  "</div>" +
                "</div>", {
                  getShape: function () {
                    var el = this.getElement(),
                        result = null;
                    if (el) {
                      var firstChild = el.firstChild;
                      result = new ymaps.shape.Rectangle(
                          new ymaps.geometry.pixel.Rectangle([
                              [0, 0],
                              [firstChild.offsetWidth, firstChild.offsetHeight]
                          ])
                      );
                    }
                    return result;
                  }
                }
              ),

              MainMarkerLayout = ymaps.templateLayoutFactory.createClass([
                '<div class="ya-main-placemark">',
                    '<span></span>',
                '</div>'
              ].join('')),

              clusterer = new ymaps.Clusterer({
                clusterize: true,
                visible: true,
                gridSize: 512,
                clusterHasHint: false,
              }),

              objectManager = new ymaps.ObjectManager({
                clusterize: false,
                clusterHasBalloon: false,
                geoObjectOpenBalloonOnClick: true,
                visible: false
              });


          mapInstance.behaviors.disable('scrollZoom');

          const renderPlaces = () => {
            mapData.forEach(function(item) {
              var objectToAdd = {
                id: 1,
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: item.coords
                },
                options: {
                  iconLayout: MainMarkerLayout,
                  iconShape: {
                    type: 'Circle',
                    coordinates: [0, 0],
                    radius: 20
                  },
                  hasHint: true,
                  hintLayout: HintLayout,
                  hintCloseTimeout: null
                },
                properties: {
                  address: item.address
                }
              };

              objectManager.add(objectToAdd);
            });
          }

          renderPlaces();

          mapInstance.geoObjects.add(objectManager);
      }
    });
}
