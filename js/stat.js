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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      'rgba(0, 0, 0, 0.7)');

  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText(
      'Ура вы победили!',
      CLOUD_X + HEADER_GAP,
      GAP + FONT_GAP);

  ctx.fillText(
      'Список результатов:',
      CLOUD_X + HEADER_GAP,
      GAP + FONT_GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    // Random color
    var randomColor = Math.floor(Math.random() * 100) + 1;
    if (players[i] === 'Вы') {
      ctx.fillStyle = '#ff0000';
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

/*
window.renderStatistics = function (ctx) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.7)');

  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText(
    'Ура вы победили!',
    CLOUD_X + HEADER_GAP,
    GAP + FONT_GAP);

  ctx.fillText(
    'Список результатов:',
    CLOUD_X + HEADER_GAP,
    GAP + FONT_GAP + FONT_GAP);

  ctx.fillText(
  'Вы',
  CLOUD_X + FONT_GAP,
  CLOUD_HEIGHT - GAP - FONT_GAP);

  ctx.fillRect(
    CLOUD_X + GAP,
    BAR_HEIGHT,
    BAR_WIDTH,
    -(BAR_HEIGHT-TEXT_WIDTH));

  ctx.fillText(
    'Юлия',
    CLOUD_X + FONT_GAP + (GAP + BAR_WIDTH ),
    CLOUD_HEIGHT - GAP - FONT_GAP);

  ctx.fillRect(
    CLOUD_X + GAP + (GAP + BAR_WIDTH ),
    BAR_HEIGHT,
    BAR_WIDTH,
    -(BAR_HEIGHT-TEXT_WIDTH));

  ctx.fillText(
    'Юлия2',
    CLOUD_X + FONT_GAP + (GAP + BAR_WIDTH) * 2,
    CLOUD_HEIGHT - GAP - FONT_GAP);

  ctx.fillRect(
    CLOUD_X + GAP + (GAP + BAR_WIDTH) * 2,
    BAR_HEIGHT,
    BAR_WIDTH,
    -(BAR_HEIGHT-TEXT_WIDTH));

  ctx.fillText(
    'Юлия3',
    CLOUD_X + FONT_GAP + (GAP + BAR_WIDTH) * 3,
    CLOUD_HEIGHT - GAP - FONT_GAP);

  ctx.fillRect(
    CLOUD_X + GAP + (GAP + BAR_WIDTH) * 3,
    BAR_HEIGHT,
    BAR_WIDTH,
    -(BAR_HEIGHT-TEXT_WIDTH));
};
*/
