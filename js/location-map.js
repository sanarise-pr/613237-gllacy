ymaps.ready(function() {
  var myMap = new ymaps.Map(
    'location-map',
    {
      center: [59.938631, 30.326],
      zoom: 16,
      controls: ['smallMapDefaultSet']
    },
    {
      minZoom: 10,
      yandexMapDisablePoiInteractivity: true
    }
  );
  myMap.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark(
    [59.938631, 30.323055],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [218, 142],
      iconImageOffset: [-40, -140]
    }
  );
  myMap.geoObjects.add(myPlacemark);
});
