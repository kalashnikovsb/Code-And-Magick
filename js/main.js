'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  var errorMessageStyle = 'position: absolute; top: 0; left: 0; right: 0; z-index: 100; padding: 10px; background: red; color: white; font-size: 15px; text-align: center;';

  window.main = {
    numberOfWizards: 4,

    allData: [],

    onError: function (errorText) {
      var errorMessage = document.createElement('div');
      errorMessage.textContent = errorText;
      errorMessage.style = errorMessageStyle;
      document.body.appendChild(errorMessage);
    },
  };

  var onDownloadSuccess = function (array) {
    window.main.allData = array.slice();
    window.wizards.renderSortedArray(window.main.allData);
  };

  setupSimilar.classList.remove('hidden');
  window.backend.load(onDownloadSuccess, window.main.onError);
})();
