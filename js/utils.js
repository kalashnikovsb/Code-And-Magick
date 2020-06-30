'use strict';

(function () {

  window.utils = {
    getRandomNumber: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getRandomArrayElement: function (array) {
      var maxIndex = array.length - 1;
      var randomIndex = this.getRandomNumber(0, maxIndex);
      return array[randomIndex];
    },

    getRandomSubArray: function (numberOfElements, array) {
      var result = [];
      for (var i = 0; i < numberOfElements; i++) {
        var randomElement = window.utils.getRandomArrayElement(array);
        result.push(randomElement);
      }
      return result;
    },

    restoreCoords: function (element) {
      element.style.left = '';
      element.style.top = '';
    },

  };

})();
