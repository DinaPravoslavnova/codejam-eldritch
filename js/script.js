// Древние и трекер

import ancientsData from './ancients.js';
import cardsData from './cards.js';

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

let difficultyLevel = undefined;
let ancient = undefined;

azathoth.addEventListener('click', function() {
  setTracker(0);
  azathoth.classList.add('active');
  cthulthu.classList.remove('active');
  iogSothoth.classList.remove('active');
  shubNiggurath.classList.remove('active');
  ancient = "azathoth";
});
cthulthu.addEventListener('click', function() {
  setTracker(1);
  cthulthu.classList.add('active');
  azathoth.classList.remove('active');
  iogSothoth.classList.remove('active');
  shubNiggurath.classList.remove('active');
  ancient = "cthulthu";

});
iogSothoth.addEventListener('click', function() {
  setTracker(2);
  iogSothoth.classList.add('active');
  azathoth.classList.remove('active');
  cthulthu.classList.remove('active');
  shubNiggurath.classList.remove('active');
  ancient = "iogSothoth";

});
shubNiggurath.addEventListener('click', function() {
  setTracker(3);
  shubNiggurath.classList.add('active');
  azathoth.classList.remove('active');
  cthulthu.classList.remove('active');
  iogSothoth.classList.remove('active');
  ancient = "shubNiggurath";
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

  ancient = undefined;
  buttonVeryLight.classList.remove("active");
  buttonLight.classList.remove("active");
  buttonMedium.classList.remove("active");
  buttonHigh.classList.remove("active");
  buttonVeryHigh.classList.remove("active");
  buttonCardNext.style.backgroundImage = "";

}

// выбор кнопок уровня сложности

const buttonVeryLight = document.querySelector(".difficulty__button_verylight");
const buttonLight = document.querySelector(".difficulty__button_light");
const buttonMedium = document.querySelector(".difficulty__button_medium");
const buttonHigh = document.querySelector(".difficulty__button_high");
const buttonVeryHigh = document.querySelector(".difficulty__button_veryhigh");

buttonVeryLight.addEventListener("click", function () {
  buttonVeryLight.classList.add("active");
  buttonLight.classList.remove("active");
  buttonMedium.classList.remove("active");
  buttonHigh.classList.remove("active");
  buttonVeryHigh.classList.remove("active");
  difficultyLevel = "very_light";
  сardNext.style.backgroundImage = "";

});

buttonLight.addEventListener("click", function () {
  buttonLight.classList.add("active");
  buttonVeryLight.classList.remove("active");
  buttonMedium.classList.remove("active");
  buttonHigh.classList.remove("active");
  buttonVeryHigh.classList.remove("active");
  difficultyLevel = "light";
  сardNext.style.backgroundImage = "";

});

buttonMedium.addEventListener("click", function () {
  buttonMedium.classList.add("active");
  buttonVeryLight.classList.remove("active");
  buttonLight.classList.remove("active");
  buttonHigh.classList.remove("active");
  buttonVeryHigh.classList.remove("active");
  difficultyLevel = "medium";
  сardNext.style.backgroundImage = "";

});

buttonHigh.addEventListener("click", function () {
  buttonHigh.classList.add("active");
  buttonVeryLight.classList.remove("active");
  buttonLight.classList.remove("active");
  buttonMedium.classList.remove("active");
  buttonVeryHigh.classList.remove("active");
  difficultyLevel = "high";
  сardNext.style.backgroundImage = "";

});

buttonVeryHigh.addEventListener("click", function () {
  buttonVeryHigh.classList.add("active");
  buttonVeryLight.classList.remove("active");
  buttonLight.classList.remove("active");
  buttonMedium.classList.remove("active");
  buttonHigh.classList.remove("active");
  difficultyLevel = "very_high";
  сardNext.style.backgroundImage = "";

});

// формирование колоды

const buttonMix = document.querySelector(".difficulty__button_mix");

buttonMix.addEventListener("click", function () {
  buttonMix.classList.add("active");
  mix();
});

const buttonCardClick = document.querySelector(".cards__click");
const buttonCardNext = document.querySelector(".cards__next");

let arrayCards = [];

function mix () {
  let arrayBlue = [];
  let arrayBrown = [];
  let arrayGreen = [];
  let arrayBrownNormal = [];
  let arrayGreenNormal = [];

  let arrayFirstStage = [];
  let arraySecondStage = [];
  let arrayThirdStage = [];

if (difficultyLevel === "medium") {
  cardsData.forEach(card => {
    if (card.color === "blue") {
      arrayBlue.push(card);
    } else if (card.color === "brown") {
      arrayBrown.push(card);
    } else {
      arrayGreen.push(card);
    }  
  });
} else if (difficultyLevel === "light") {
  cardsData.forEach(card => {
    if (card.color === "blue" && card.difficulty != "hard") {
      arrayBlue.push(card);
    } else if (card.color === "brown" && card.difficulty != "hard") {
      arrayBrown.push(card);
    } else if (card.color === "green" && card.difficulty != "hard") {
      arrayGreen.push(card);
    }
  });
} else if (difficultyLevel === "high") {
  cardsData.forEach(card => {
    if (card.color === "blue" && card.difficulty != "easy") {
      arrayBlue.push(card);
    } else if (card.color === "brown" && card.difficulty != "easy") {
      arrayBrown.push(card);
    } else if (card.color === "green" && card.difficulty != "easy") {
      arrayGreen.push(card);
    }
  });
} else if (difficultyLevel === "very_light") {
  cardsData.forEach(card => {
    if (card.color === "blue" && card.difficulty === "easy") {
      arrayBlue.push(card);
    } else if (card.color === "brown" && card.difficulty === "easy") {
      arrayBrown.push(card);
    } else if (card.color === "brown" && card.difficulty === "normal") {
      arrayBrownNormal.push(card);
    } else if (card.color === "green" && card.difficulty === "easy") {
      arrayGreen.push(card);
    } else if (card.color === "green" && card.difficulty === "normal") {
      arrayGreenNormal.push(card);
    }
  });

  if (arrayBrown.length < dot2Value + dot5Value + dot8Value) {
    arrayBrown = arrayBrown.concat(arrayBrownNormal.sort(cardsMix).slice(0, dot2Value + dot5Value + dot8Value - arrayBrown.length));
  }

  if (arrayGreen.length < dot1Value + dot4Value + dot7Value) {
    arrayGreen = arrayGreen.concat(arrayGreenNormal.sort(cardsMix).slice(0, dot1Value + dot4Value + dot7Value - arrayGreen.length));
  }
} else if (difficultyLevel === "very_high") {
  cardsData.forEach(card => {
    if (card.color === "blue" && card.difficulty === "hard") {
      arrayBlue.push(card);
    } else if (card.color === "brown" && card.difficulty === "hard") {
      arrayBrown.push(card);
    } else if (card.color === "brown" && card.difficulty === "normal") {
      arrayBrownNormal.push(card);
    } else if (card.color === "green" && card.difficulty === "hard") {
      arrayGreen.push(card);
    } else if (card.color === "green" && card.difficulty === "normal") {
      arrayGreenNormal.push(card);
    }
  });

  if (arrayBrown.length < dot2Value + dot5Value + dot8Value) {
    arrayBrown = arrayBrown.concat(arrayBrownNormal.sort(cardsMix).slice(0, dot2Value + dot5Value + dot8Value - arrayBrown.length));
  }
  if (arrayGreen.length < dot1Value + dot4Value + dot7Value) {
    arrayGreen = arrayGreen.concat(arrayGreenNormal.sort(cardsMix).slice(0, dot1Value + dot4Value + dot7Value - arrayGreen.length));
  }
}


function cardsMix(a, b) {
  return 0.5 - Math.random();
}

arrayBlue.sort(cardsMix);
arrayBrown.sort(cardsMix);
arrayGreen.sort(cardsMix);

arrayThirdStage = arrayBlue.slice(0, dot9Value).concat(arrayBrown.slice(0, dot8Value)).concat(arrayGreen.slice(0, dot7Value));
arraySecondStage = arrayBlue.slice(dot9Value, dot9Value + dot6Value).concat(arrayBrown.slice(dot8Value, dot8Value + dot5Value)).concat(arrayGreen.slice(dot7Value, dot7Value + dot4Value));
arrayFirstStage = arrayBlue.slice(dot9Value + dot6Value, dot9Value + dot6Value + dot3Value).concat(arrayBrown.slice(dot8Value + dot5Value, dot8Value + dot5Value  + dot2Value)).concat(arrayGreen.slice(dot7Value + dot4Value, dot7Value + dot4Value + dot1Value));

arrayThirdStage.sort(cardsMix);
arraySecondStage.sort(cardsMix);
arrayFirstStage.sort(cardsMix);

arrayCards = arrayThirdStage.concat(arraySecondStage).concat(arrayFirstStage);

ancient = undefined;
difficultyLevel = undefined;


console.log(arrayCards);

};

// демонстрация карт, обновление трекера

const сardNext = document.querySelector(".cards__next");
const buttonDemonstration = document.querySelector(".cards__click");

buttonDemonstration.addEventListener("click", function () {
  if (arrayCards.length > 0) {
    сardNext.style.backgroundImage = arrayCards[arrayCards.length - 1].src;
    
    if (arrayCards[arrayCards.length - 1].color === "brown") {
      if (dot2.textContent != 0) {
        dot2.textContent = dot2.textContent - 1;
      } else if (dot5.textContent != 0) {
        dot5.textContent = dot5.textContent - 1;
      } else if (dot8.textContent != 0) {
        dot8.textContent = dot8.textContent - 1;
      }
    } else if (arrayCards[arrayCards.length - 1].color === "green") {
      if (dot1.textContent != 0) {
        dot1.textContent = dot1.textContent - 1;
      } else if (dot4.textContent != 0) {
        dot4.textContent = dot4.textContent - 1;
      } else if (dot7.textContent != 0) {
        dot7.textContent = dot7.textContent - 1;
      }
    } else {
      if (dot3.textContent != 0) {
        dot3.textContent = dot3.textContent - 1;
      } else if (dot6.textContent != 0) {
        dot6.textContent = dot6.textContent - 1;
      } else if (dot9.textContent != 0) {
        dot9.textContent = dot9.textContent - 1;
      }
    }

    console.log("Карта: " + arrayCards[arrayCards.length - 1].id + " - " + arrayCards[arrayCards.length - 1].difficulty);

    arrayCards.pop();
  } else {
    сardNext.style.backgroundImage = "";

    difficultyLevel = undefined;

    azathoth.classList.remove('active');
    cthulthu.classList.remove('active');
    iogSothoth.classList.remove('active');
    shubNiggurath.classList.remove('active');

    buttonVeryLight.classList.remove("active");
    buttonLight.classList.remove("active");
    buttonMedium.classList.remove("active");
    buttonHigh.classList.remove("active");
    buttonVeryHigh.classList.remove("active");

    buttonMix.classList.remove("active");

  }
  
});