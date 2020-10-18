const feedbackButton = document.querySelector(".contact-info__button");
const feedbackPopup = document.querySelector(".feedback");
const feedbackClose = feedbackPopup.querySelector(".feedback__close");
const feedbackOverlay = document.querySelector(".page__body");
const feedbackName = feedbackPopup.querySelector(".feedback__input--name");


feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal--show");
  feedbackOverlay.classList.add("page__body--overlay");
  feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal--show");
  feedbackOverlay.classList.remove("page__body--overlay");
});





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