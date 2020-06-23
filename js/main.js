'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar');

  setupSimilar.classList.remove('hidden');
  var wizards = window.wizards.getWizardsArray();
  window.wizards.renderWizardsList(wizards);
})();
