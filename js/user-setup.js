'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var userIcon = setup.querySelector('.upload');
var artifactsShop = document.querySelector('.setup-artifacts-shop');
var inventory = document.querySelector('.setup-artifacts');
var draggedItem = null;

var onSetupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closeSetup();
  }
};

var openSetup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onSetupEscPress);
};

var closeSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
  setup.style.left = '';
  setup.style.top = '';
};

userIcon.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var dragged = false;

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY,
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: moveEvt.clientX - startCoords.x,
      y: moveEvt.clientY - startCoords.y,
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY,
    };

    setup.style.left = setup.offsetLeft + shift.x + 'px';
    setup.style.top = setup.offsetTop + shift.y + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    if (dragged) {
      var onUserIconClick = function (clickEvt) {
        clickEvt.preventDefault();
        userIcon.removeEventListener('click', onUserIconClick);
      };
      userIcon.addEventListener('click', onUserIconClick);
    }

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

setupOpen.addEventListener('click', function () {
  openSetup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openSetup();
  }
});

setupClose.addEventListener('click', function () {
  closeSetup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeSetup();
  }
});

userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onSetupEscPress);
});

userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onSetupEscPress);
});

artifactsShop.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  }
});

inventory.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  return false;
});

inventory.addEventListener('drop', function (evt) {
  evt.preventDefault();
  evt.target.style.backgroundColor = '';
  evt.target.appendChild(draggedItem);
});

inventory.addEventListener('dragenter', function (evt) {
  evt.target.style.backgroundColor = 'yellow';
  evt.preventDefault();
});

inventory.addEventListener('dragleave', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.preventDefault();
});
