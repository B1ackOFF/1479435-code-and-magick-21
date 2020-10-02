'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = CLOUD_HEIGHT - TEXT_WIDTH - GAP - GAP - TEXT_WIDTH; // 150
var BAR_WIDTH = 40;
var HEADER_GAP = 70;

var MAIN_PLAYER = 'Вы';
var MAIN_FONT = '16px PT Mono';
var STATISTIC_TITLE = 'Ура вы победили!';
var STATISTIC_TEXT = 'Список результатов:';
var COLORS = {
  BLACK: '#000',
  WHITE: '#fff',
  RED: '#ff0000',
  GRAY: 'rgba(0, 0, 0, 0.7)'
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCongratulationText = function (ctx, text, x, y) {
  ctx.fillText(text, x, y);
};

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      COLORS.GRAY);

  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      COLORS.WHITE);

  ctx.fillStyle = COLORS.BLACK;
  ctx.font = MAIN_FONT;

  renderCongratulationText(
      ctx,
      STATISTIC_TITLE,
      CLOUD_X + HEADER_GAP,
      GAP + FONT_GAP);

  renderCongratulationText(
      ctx,
      STATISTIC_TEXT,
      CLOUD_X + HEADER_GAP,
      GAP + FONT_GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    // Random color
    var randomColor = Math.floor(Math.random() * 100) + 1;
    if (players[i] === MAIN_PLAYER) {
      ctx.fillStyle = COLORS.RED;
    } else {
      ctx.fillStyle = 'hsl(240,' + randomColor + '%, 50%)';
    }
    // name
    ctx.fillText(
        players[i],
        CLOUD_X + TEXT_WIDTH + (GAP + BAR_WIDTH + BAR_WIDTH) * i,
        CLOUD_X + CLOUD_X + TEXT_WIDTH
    );
    // Rect
    ctx.fillRect(
        CLOUD_X + TEXT_WIDTH + (GAP + BAR_WIDTH + BAR_WIDTH) * i,
        BAR_HEIGHT + GAP + FONT_GAP + TEXT_WIDTH + GAP,
        BAR_WIDTH,
        -((BAR_HEIGHT * times[i]) / maxTime)
    );
    // Points
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + TEXT_WIDTH + (GAP + BAR_WIDTH + BAR_WIDTH) * i,
        CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - BAR_WIDTH
    );
  }
};
