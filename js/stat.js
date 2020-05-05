'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_COLOR = 'rgba(0, 0, 0, 1)';
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandomBlue = function () {
  var saturationValue = Math.floor(Math.random() * 100);
  return ('hsl(240, ' + saturationValue + '%, 50%)');
};

var getMaxValue = function (arr) {
  var maxValue = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP, CLOUD_Y + (GAP + FONT_GAP) * 1);
  ctx.fillText('Список результатов:', CLOUD_X + BAR_GAP, CLOUD_Y + (GAP + FONT_GAP) * 2);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = PLAYER_BAR_COLOR;
    } else {
      ctx.fillStyle = getRandomBlue();
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - BAR_WIDTH - BAR_HEIGHT + (BAR_HEIGHT - BAR_HEIGHT), BAR_WIDTH, BAR_HEIGHT);
    ctx.fillStyle = 'black';
  }

};
