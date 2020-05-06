'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var FONT_GAP = 16;
var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var TEXT_COLOR = 'rgba(0, 0, 0, 1)';
var TEXT_FONT = '16px PT Mono';
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var BAR_Y_MAX_COORD = CLOUD_Y + CLOUD_HEIGHT - BAR_WIDTH - BAR_HEIGHT;
var NAME_Y = CLOUD_Y + CLOUD_HEIGHT - BAR_WIDTH + FONT_GAP;

var renderCloud = function (ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandomBlue = function () {
  var saturationValue = Math.floor(Math.random() * (100 + 1));
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

var getBarHeight = function (value, maxValue) {
  return value * BAR_HEIGHT / maxValue;
};

var renderBar = function (ctx, name, x, y, height) {
  ctx.fillStyle = (name === 'Вы') ? PLAYER_BAR_COLOR : getRandomBlue();
  ctx.fillRect(x, y, BAR_WIDTH, height);
};

var renderName = function (ctx, name, x, y) {
  ctx.font = TEXT_FONT;
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(name, x, y);
};

var renderTime = function (ctx, value, x, y) {
  ctx.font = TEXT_FONT;
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(Math.round(value), x, y);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, SHADOW_COLOR, CLOUD_X + GAP, CLOUD_Y + GAP);
  renderCloud(ctx, CLOUD_COLOR, CLOUD_X, CLOUD_Y);

  ctx.font = TEXT_FONT;
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP, CLOUD_Y + FONT_GAP * 1);
  ctx.fillText('Список результатов:', CLOUD_X + BAR_GAP, CLOUD_Y + FONT_GAP * 2);

  var maxValue = getMaxValue(times);

  for (var i = 0; i < names.length; i++) {
    var currentBarHeight = getBarHeight(times[i], maxValue);
    var currentBarX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var currentBarY = BAR_Y_MAX_COORD + (BAR_HEIGHT - currentBarHeight);
    var currentTimeY = currentBarY - GAP;

    renderBar(ctx, names[i], currentBarX, currentBarY, currentBarHeight);
    renderName(ctx, names[i], currentBarX, NAME_Y);
    renderTime(ctx, times[i], currentBarX, currentTimeY);
  }
};
