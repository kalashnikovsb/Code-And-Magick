'use strict';

(function () {
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SAVE_URL = 'https://echo.htmlacademy.ru';
  var TIMEOUT = 10000;
  var SUCCCESS_STATUS = 200;

  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = TIMEOUT;
      xhr.open('GET', LOAD_URL);
      xhr.send();

      xhr.addEventListener('load', function () {
        if (xhr.status === SUCCCESS_STATUS) {
          onLoad(xhr.response);
        } else {
          onError('Статус ошибки: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
      });
    },

    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = TIMEOUT;
      xhr.open('POST', SAVE_URL);
      xhr.send(data);

      xhr.addEventListener('load', function () {
        if (xhr.status === SUCCCESS_STATUS) {
          onLoad();
        } else {
          onError('Статус ошибки: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
      });
    },
  };
})();
