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
const wizards = {
  name: WIZARD_NAMES,
  lastname: WIZARD_LASTNAMES,
  coatColor: WIZARD_COAT_COLOR,
  eyesColor: WIZARD_EYES_COLOR
};
const amountWizards = 4;

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

const renderWizard = function () {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = `${getRandomData(WIZARD_NAMES)} ${getRandomData(WIZARD_LASTNAMES)}`;
  wizardElement.querySelector('.wizard-coat').style.fill = `${getRandomData(WIZARD_COAT_COLOR)}`;
  wizardElement.querySelector('.wizard-eyes').style.fill = `${getRandomData(WIZARD_EYES_COLOR)}`;

  similarListElement.appendChild(wizardElement);

  return wizardElement;
};

const createNodeFragment = () => {
  let fragment = document.createDocumentFragment();

  for (var i = 0; i < amountWizards; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);

  return createNodeFragment;
};

createNodeFragment();
