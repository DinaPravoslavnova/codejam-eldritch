// Древние и трекер

import ancientsData from './ancients.js';

const azathoth = document.getElementById('Azathoth');
const cthulthu = document.getElementById('Cthulthu');
const iogSothoth = document.getElementById('IogSothoth');
const shubNiggurath = document.getElementById('ShubNiggurath');

const dot1 = document.getElementById('dot1');
let dot1Value;
const dot2 = document.getElementById('dot2');
let dot2Value;
const dot3 = document.getElementById('dot3');
let dot3Value;
const dot4 = document.getElementById('dot4');
let dot4Value;
const dot5 = document.getElementById('dot5');
let dot5Value;
const dot6 = document.getElementById('dot6');
let dot6Value;
const dot7 = document.getElementById('dot7');
let dot7Value;
const dot8 = document.getElementById('dot8');
let dot8Value;
const dot9 = document.getElementById('dot9');
let dot9Value;

azathoth.addEventListener('click', function() {
  setTracker(0);
  azathoth.classList.add('active');
  cthulthu.classList.remove('active');
  iogSothoth.classList.remove('active');
  shubNiggurath.classList.remove('active');
});
cthulthu.addEventListener('click', function() {
  setTracker(1);
  cthulthu.classList.add('active');
  azathoth.classList.remove('active');
  iogSothoth.classList.remove('active');
  shubNiggurath.classList.remove('active');
});
iogSothoth.addEventListener('click', function() {
  setTracker(2);
  iogSothoth.classList.add('active');
  azathoth.classList.remove('active');
  cthulthu.classList.remove('active');
  shubNiggurath.classList.remove('active');
});
shubNiggurath.addEventListener('click', function() {
  setTracker(3);
  shubNiggurath.classList.add('active');
  azathoth.classList.remove('active');
  cthulthu.classList.remove('active');
  iogSothoth.classList.remove('active');
});

function setTracker(ancient) {

  dot1Value = ancientsData[ancient].firstStage.greenCards;
  dot1.textContent = dot1Value;

  dot2Value = ancientsData[ancient].firstStage.brownCards;
  dot2.textContent = dot2Value;

  dot3Value = ancientsData[ancient].firstStage.blueCards;
  dot3.textContent = dot3Value;

  dot4Value = ancientsData[ancient].secondStage.greenCards;
  dot4.textContent = dot4Value;

  dot5Value = ancientsData[ancient].secondStage.brownCards;
  dot5.textContent = dot5Value;

  dot6Value = ancientsData[ancient].secondStage.blueCards;
  dot6.textContent = dot6Value;

  dot7Value = ancientsData[ancient].thirdStage.greenCards;
  dot7.textContent = dot7Value;

  dot8Value = ancientsData[ancient].thirdStage.brownCards;
  dot8.textContent = dot8Value;

  dot9Value = ancientsData[ancient].thirdStage.blueCards;
  dot9.textContent = dot9Value;

}

// выбор кнопок уровня сложности

const buttonVeryLight = document.querySelector(".difficulty__button_verylight");
const buttonLight = document.querySelector(".difficulty__button_light");
const buttonMedium = document.querySelector(".difficulty__button_medium");
const buttonHigh = document.querySelector(".difficulty__button_high");
const buttonVeryHigh = document.querySelector(".difficulty__button_veryhigh");

let difficulty;

buttonVeryLight.addEventListener("click", function () {
  buttonVeryLight.classList.add("active");
  buttonLight.classList.remove("active");
  buttonMedium.classList.remove("active");
  buttonHigh.classList.remove("active");
  buttonVeryHigh.classList.remove("active");
  difficulty = "very_light";

});

buttonLight.addEventListener("click", function () {
  buttonLight.classList.add("active");
  buttonVeryLight.classList.remove("active");
  buttonMedium.classList.remove("active");
  buttonHigh.classList.remove("active");
  buttonVeryHigh.classList.remove("active");
  difficulty = "light";

});

buttonMedium.addEventListener("click", function () {
  buttonMedium.classList.add("active");
  buttonVeryLight.classList.remove("active");
  buttonLight.classList.remove("active");
  buttonHigh.classList.remove("active");
  buttonVeryHigh.classList.remove("active");
  difficulty = "medium";

});

buttonHigh.addEventListener("click", function () {
  buttonHigh.classList.add("active");
  buttonVeryLight.classList.remove("active");
  buttonLight.classList.remove("active");
  buttonMedium.classList.remove("active");
  buttonVeryHigh.classList.remove("active");
  difficulty = "high";

});

buttonVeryHigh.addEventListener("click", function () {
  buttonVeryHigh.classList.add("active");
  buttonVeryLight.classList.remove("active");
  buttonLight.classList.remove("active");
  buttonMedium.classList.remove("active");
  buttonHigh.classList.remove("active");
  difficulty = "very_high";

});

// формирование колоды

const buttonMix = document.querySelector(".difficulty__button_mix");

buttonMix.addEventListener("click", function () {
  buttonMix.classList.add("active");
});

const buttonCardClick = document.querySelector(".cards__click");
const buttonCardNext = document.querySelector(".cards__next");






