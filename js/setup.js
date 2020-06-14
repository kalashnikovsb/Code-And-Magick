'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_WIZARDS = 4;
var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var wizardsList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');
var FIREBALLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomArrayElement = function (array) {
  var maxIndex = array.length - 1;
  var randomIndex = getRandomNumber(0, maxIndex);
  return array[randomIndex];
};

var getRandomName = function (namesArray, surnamesArray) {
  var name = getRandomArrayElement(namesArray);
  var surname = getRandomArrayElement(surnamesArray);
  return name + ' ' + surname;
};

var getWizardsArray = function () {
  var wizardsArray = [];
  for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
    var wizardItem = {};
    wizardItem.name = getRandomName(NAMES, SURNAMES);
    wizardItem.coatColor = getRandomArrayElement(COATS_COLORS);
    wizardItem.eyesColor = getRandomArrayElement(EYES_COLORS);
    wizardsArray.push(wizardItem);
  }
  return wizardsArray;
};

var generateWizard = function (object) {
  var wizardItem = wizardTemplate.cloneNode(true);
  wizardItem.querySelector('.setup-similar-label').textContent = object.name;
  wizardItem.querySelector('.wizard-coat').style.fill = object.coatColor;
  wizardItem.querySelector('.wizard-eyes').style.fill = object.eyesColor;
  return wizardItem;
};

var renderWizardsList = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(generateWizard(wizards[i]));
  }
  wizardsList.appendChild(fragment);
};

var onSetupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closeSetup();
  }
};

var openSetup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onSetupEscPress);
};

var closeSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
};

setupOpen.addEventListener('click', function () {
  openSetup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openSetup();
  }
});

setupClose.addEventListener('click', function () {
  closeSetup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeSetup();
  }
});

userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onSetupEscPress);
});

userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onSetupEscPress);
});

wizardCoat.addEventListener('click', function () {
  var coatColor = getRandomArrayElement(COATS_COLORS);
  wizardCoat.style.fill = coatColor;
  wizardCoatInput.value = coatColor;
});

wizardEyes.addEventListener('click', function () {
  var eyesColor = getRandomArrayElement(EYES_COLORS);
  wizardEyes.style.fill = eyesColor;
  wizardEyesInput.value = eyesColor;
});

wizardFireball.addEventListener('click', function () {
  var fireballColor = getRandomArrayElement(FIREBALLS_COLORS);
  wizardFireball.style.background = fireballColor;
  wizardFireballInput.value = fireballColor;
});

// Основной код
setupSimilar.classList.remove('hidden');
var wizards = getWizardsArray();
renderWizardsList(wizards);
