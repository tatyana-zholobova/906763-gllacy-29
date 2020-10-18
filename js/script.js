ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(document.querySelector(".contact-info__map"), {
    center: [59.939342, 30.329353],
    zoom: 16
  });
  var myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/pin.svg',
    iconImageSize: [80, 140],
    iconImageOffset: [-40, -140]
  });
  myMap.geoObjects.add(myPlacemark);
}