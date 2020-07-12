'use strict';

(function () {

  window.utils = {
    getRandomNumber: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getNextArrayElement: function (array, currentItem) {
      var lastIndex = array.length - 1;
      var index = array.indexOf(currentItem);
      if (index === -1 || index === lastIndex) {
        return array[0];
      }
      return array[index + 1];
    },

    restoreCoords: function (element) {
      element.style.left = '';
      element.style.top = '';
    },
  };

})();
