'use strict';

(function () {
  window.backend = {

    load: function (onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = '10000';
      xhr.open('GET', URL);
      xhr.send();

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
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
      var URL = 'https://echo.htmlacademy.ru';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = '10000';
      xhr.open('POST', URL);
      xhr.send(data);

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
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
