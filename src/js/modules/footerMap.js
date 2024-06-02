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

              MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="popover">' +
                    `<a class="close" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329 329"><path fill="#fff" d="M194.64,164.77,322.75,36.66A21.31,21.31,0,0,0,292.61,6.52L164.5,134.63,36.39,6.52A21.31,21.31,0,0,0,6.25,36.66L134.36,164.77,6.25,292.88A21.31,21.31,0,0,0,36.39,323L164.5,194.91,292.61,323a21.31,21.31,0,0,0,30.14-30.14Z" /></svg></a>` +
                    '<div class="arrow"></div>' +
                    '<div class="popover-inner">' +
                        '$[[options.contentLayout observeSize minWidth=420 maxWidth=480]]' +
                        '</div>' +
                    '</div>',
                {
                    /**
                     * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                     * @function
                     * @name build
                     */
                    build: function() {
                        this.constructor.superclass.build.call(this);

                        this._$element = $('.popover', this.getParentElement());

                        this.applyElementOffset();

                        this._$element.find('.close').on('click', $.proxy(this.onCloseClick, this));
                    },

                    /**
                     * Удаляет содержимое макета из DOM.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                     * @function
                     * @name clear
                     */
                    clear: function() {
                        this._$element.find('.close').off('click');

                        this.constructor.superclass.clear.call(this);
                    },

                    /**
                     * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onSublayoutSizeChange
                     */
                    onSublayoutSizeChange: function() {
                        MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                        if (!this._isElement(this._$element)) {
                            return;
                        }

                        this.applyElementOffset();

                        this.events.fire('shapechange');
                    },

                    /**
                     * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name applyElementOffset
                     */
                    applyElementOffset: function() {
                        this._$element.css({
                            left: -46,
                            top: -(this._$element[0].offsetHeight / 2 + this._$element.find('.arrow')[0].offsetHeight)
                        });
                    },

                    /**
                     * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onCloseClick
                     */
                    onCloseClick: function(e) {
                        e.preventDefault();

                        this.events.fire('userclose');
                    },

                    /**
                     * Используется для автопозиционирования (balloonAutoPan).
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                     * @function
                     * @name getClientBounds
                     * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                     */
                    getShape: function() {
                        if (!this._isElement(this._$element)) {
                            return MyBalloonLayout.superclass.getShape.call(this);
                        }

                        var position = this._$element.position();

                        return new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [position.left, position.top],
                                [
                                    position.left + this._$element[0].offsetWidth,
                                    position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                                ]
                            ])
                        );
                    },

                    /**
                     * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                     * @function
                     * @private
                     * @name _isElement
                     * @param {jQuery} [element] Элемент.
                     * @returns {Boolean} Флаг наличия.
                     */
                    _isElement: function(element) {
                        return element && element[0] && element.find('.arrow')[0];
                    }
                }
              ),

              MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass([
                  '<h3 class="popover-title">$[properties.balloonHeader]',
                      '<div class="popover-content">$[properties.balloonContent]',
                      '</div>',
                  '</h3>'
              ].join('')),

              objectManager = new ymaps.ObjectManager({
                clusterize: false,
                clusterHasBalloon: false,
                geoObjectOpenBalloonOnClick: true,
              });


          mapInstance.behaviors.disable('scrollZoom');

          mapInstance.events.add('click', function() {
            mapInstance.balloon.close();
          });

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
                  hasHint: false,
                  balloonShadow: false,
                  balloonLayout: MyBalloonLayout,
                  balloonContentLayout: MyBalloonContentLayout,
                  balloonPanelMaxMapArea: 0,
                  hideIconOnBalloonOpen: false,
                  balloonOffset: [0, 0],
                },
                properties: {
                  balloonContent: `
                    <div class="popover-column"">
                      <div class='inner-hint'>
                        <p class='inner-hint__title'>Адрес:</p>
                        <p class='inner-hint__address'>${item.address}</p>
                      </div>
                    </div>
                  `
                }
              };

              objectManager.add(objectToAdd);
            });
          }

          renderPlaces();

          mapInstance.geoObjects.add(objectManager);

          objectManager.objects.events.add('click', function (e) {
            const objectId = e.get('objectId');
            const object = objectManager.objects.getById(objectId);

            // mapInstance.setCenter(object.geometry.coordinates, (zoom + 1), {
            //   checkZoomRange: false
            // });
            mapInstance.panTo(object.geometry.coordinates, {delay: 0});
          })
      }
    });
}
