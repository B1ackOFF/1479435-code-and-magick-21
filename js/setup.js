"use strict";

const WIZARD_NAMES = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];
const WIZARD_LASTNAMES = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];
const WIZARD_COAT_COLOR = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];
const WIZARD_EYES_COLOR = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];
const wizards = [
  {
    name: WIZARD_NAMES[0],
    lastname: WIZARD_LASTNAMES[0],
    coatColor: WIZARD_COAT_COLOR[0],
    eyesColor: WIZARD_EYES_COLOR[0]
  },
  {
    name: WIZARD_NAMES[1],
    lastname: WIZARD_LASTNAMES[1],
    coatColor: WIZARD_COAT_COLOR[1],
    eyesColor: WIZARD_EYES_COLOR[1]
  },
  {
    name: WIZARD_NAMES[2],
    lastname: WIZARD_LASTNAMES[2],
    coatColor: WIZARD_COAT_COLOR[2],
    eyesColor: WIZARD_EYES_COLOR[2]
  },
  {
    name: WIZARD_NAMES[3],
    lastname: WIZARD_LASTNAMES[3],
    coatColor: WIZARD_COAT_COLOR[3],
    eyesColor: WIZARD_EYES_COLOR[3]
  }
];
const userDialog = document.querySelector(`.setup`);
const similarСharacters = document.querySelector(`.setup-similar`);
const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const getRandomData = (arrayName) => {
  return arrayName[Math.floor(Math.random() * arrayName.length)];
};

const activeMode = (element) => {
  element.classList.remove(`hidden`);
};

activeMode(userDialog);
activeMode(similarСharacters);

var renderWizard = function () {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = `${getRandomData(WIZARD_NAMES)} ${getRandomData(WIZARD_LASTNAMES)}`;
  wizardElement.querySelector('.wizard-coat').style.fill = `${getRandomData(WIZARD_COAT_COLOR)}`;
  wizardElement.querySelector('.wizard-eyes').style.fill = `${getRandomData(WIZARD_EYES_COLOR)}`;

  similarListElement.appendChild(wizardElement);

  return wizardElement;
};

let fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
