'use strict';

(function () {
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
    };
  };

})();
