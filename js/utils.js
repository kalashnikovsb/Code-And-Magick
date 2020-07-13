'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;
  var lastTimeout;

  window.utils = {
    getRandomNumber: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getNextArrayElement: function (array, currentItem) {
      var index = array.indexOf(currentItem);
      var lastIndex = array.length - 1;
      if (index === -1 || index === lastIndex) {
        return array[0];
      }
      return array[index + 1];
    },

    restoreCoords: function (element) {
      element.style.left = '';
      element.style.top = '';
    },

    debounce: function (callback) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(callback, DEBOUNCE_INTERVAL);
    },
  };
})();
