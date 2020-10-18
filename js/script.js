const feedbackButton = document.querySelector(".contact-info__button");
const feedbackPopup = document.querySelector(".feedback");
const feedbackClose = feedbackPopup.querySelector(".feedback__close");
const page = document.querySelector(".page__body");
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
  page.classList.add("page__body--overlay");

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
  page.classList.remove("page__body--overlay");
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
      page.classList.remove("page__body--overlay");
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
};

const sliderItems = document.querySelectorAll(".slider__item");
const sliderButtons = document.querySelectorAll(".slider__button");

sliderButtons[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  page.classList.remove("page__body--grey");
  page.classList.remove("page__body--brown");
  page.classList.add("page__body--green");
  sliderItems[0].classList.add("slider__item--current");
  sliderItems[1].classList.remove("slider__item--current");
  sliderItems[2].classList.remove("slider__item--current");
  sliderButtons[0].classList.add("slider__button--current");
  sliderButtons[1].classList.remove("slider__button--current");
  sliderButtons[2].classList.remove("slider__button--current");

});

sliderButtons[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  page.classList.remove("page__body--green");
  page.classList.remove("page__body--brown");
  page.classList.add("page__body--grey");
  sliderItems[1].classList.add("slider__item--current");
  sliderItems[0].classList.remove("slider__item--current");
  sliderItems[2].classList.remove("slider__item--current");
  sliderButtons[1].classList.add("slider__button--current");
  sliderButtons[0].classList.remove("slider__button--current");
  sliderButtons[2].classList.remove("slider__button--current");
});

sliderButtons[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  page.classList.remove("page__body--green");
  page.classList.remove("page__body--grey");
  page.classList.add("page__body--brown");
  sliderItems[2].classList.add("slider__item--current");
  sliderItems[0].classList.remove("slider__item--current");
  sliderItems[1].classList.remove("slider__item--current");
  sliderButtons[2].classList.add("slider__button--current");
  sliderButtons[0].classList.remove("slider__button--current");
  sliderButtons[1].classList.remove("slider__button--current");
});