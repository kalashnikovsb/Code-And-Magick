'use strict';

(function () {
  var COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setup = document.querySelector('.setup');
  var wizardsList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');







  var getWizardRank = function (wizard) {
    var rank = 0;
    if (wizardCoatInput.value === wizard.colorCoat) {
      rank += 2;
    } else if (wizardCoatInput.value === wizard.colorEyes) {
      rank += 1;
    }
    return rank;
  };

  var compareWizards = function (wizardFirst, wizardSecond) {
    var rankA = getWizardRank(wizardFirst);
    var rankB = getWizardRank(wizardSecond);
    if (rankA < rankB) {
      return 1;
    }
    if (rankA > rankB) {
      return -1;
    }
    return 0;
  };







  var generateWizard = function (object) {
    var wizardItem = wizardTemplate.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = object.name;
    wizardItem.querySelector('.wizard-coat').style.fill = object.colorCoat;
    wizardItem.querySelector('.wizard-eyes').style.fill = object.colorEyes;
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
    renderSortedArray: function (array) {
      var arrayCopy = array.slice();
      arrayCopy.sort(compareWizards);

      var fragment = document.createDocumentFragment();
      for (var i = 0; i < window.main.numberOfWizards; i++) {
        fragment.appendChild(generateWizard(arrayCopy[i]));
      }
      wizardsList.appendChild(fragment);
      console.log(wizardsList.children);
    },
  };

})();
