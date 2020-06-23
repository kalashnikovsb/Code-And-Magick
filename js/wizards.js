'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var NUMBER_OF_WIZARDS = 4;
  var setup = document.querySelector('.setup');
  var wizardsList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');

  var getRandomName = function (namesArray, surnamesArray) {
    var name = window.utils.getRandomArrayElement(namesArray);
    var surname = window.utils.getRandomArrayElement(surnamesArray);
    return name + ' ' + surname;
  };

  var generateWizard = function (object) {
    var wizardItem = wizardTemplate.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = object.name;
    wizardItem.querySelector('.wizard-coat').style.fill = object.coatColor;
    wizardItem.querySelector('.wizard-eyes').style.fill = object.eyesColor;
    return wizardItem;
  };

  wizardCoat.addEventListener('click', function () {
    var coatColor = window.utils.getRandomArrayElement(COATS_COLORS);
    wizardCoat.style.fill = coatColor;
    wizardCoatInput.value = coatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var eyesColor = window.utils.getRandomArrayElement(EYES_COLORS);
    wizardEyes.style.fill = eyesColor;
    wizardEyesInput.value = eyesColor;
  });

  wizardFireball.addEventListener('click', function () {
    var fireballColor = window.utils.getRandomArrayElement(FIREBALLS_COLORS);
    wizardFireball.style.background = fireballColor;
    wizardFireballInput.value = fireballColor;
  });

  window.wizards = {
    getWizardsArray: function () {
      var wizardsArray = [];
      for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
        var wizardItem = {};
        wizardItem.name = getRandomName(NAMES, SURNAMES);
        wizardItem.coatColor = window.utils.getRandomArrayElement(COATS_COLORS);
        wizardItem.eyesColor = window.utils.getRandomArrayElement(EYES_COLORS);
        wizardsArray.push(wizardItem);
      }
      return wizardsArray;
    },

    renderWizardsList: function (wizards) {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < wizards.length; i++) {
        fragment.appendChild(generateWizard(wizards[i]));
      }
      wizardsList.appendChild(fragment);
    },
  };

})();
