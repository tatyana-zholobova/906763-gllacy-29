const feedbackButton = document.querySelector(".contact-info__button");
const feedbackPopup = document.querySelector(".feedback");
const feedbackClose = feedbackPopup.querySelector(".feedback__close");
const feedbackOverlay = document.querySelector(".page__body");
const feedbackName = feedbackPopup.querySelector(".feedback__input--name");
const feedbackEmail = feedbackPopup.querySelector(".feedback__input--email");
const feedbackMessage = feedbackPopup.querySelector(".feedback__message");
const feedbackForm = feedbackPopup.querySelector(".feedback__form");

let isStorageSupport = true;
const nameStorage = "";

try {
  nameStorage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal--show");
  feedbackOverlay.classList.add("page__body--overlay");
  if (nameStorage) {
    feedbackName.value = nameStorage;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal--show");
  feedbackPopup.classList.remove("modal--error");
  feedbackOverlay.classList.remove("page__body--overlay");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal--error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
    }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal--show");
      feedbackPopup.classList.remove("modal--error");
      feedbackOverlay.classList.remove("page__body--overlay");
    }
  }
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