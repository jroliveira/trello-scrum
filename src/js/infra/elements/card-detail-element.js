'use strict';

function CardDetailElement() {}

CardDetailElement.prototype.getPoints = function () {
  return $('.card-detail-window .edit-heavy > .edit-controls > ul > .ts-points');
};

CardDetailElement.prototype.createPoints = function () {
  let $points = $('<ul/>', null).appendTo('.card-detail-window .edit-heavy > .edit-controls');

  $points.createPoint = function () {
    let attrs = {
      class: 'ts-points'
    };

    return $('<li/>', attrs).appendTo($points);
  };

  return $points;
};

CardDetailElement.prototype.getTitle = function () {
  return $('.card-detail-title > .edit > textarea.field');
};

CardDetailElement.prototype.getButton = function () {
  return $('.card-detail-title > .edit > .edit-controls > .js-save-edit');
};