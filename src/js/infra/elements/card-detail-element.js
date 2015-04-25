'use strict';

function CardDetailElement() {}

CardDetailElement.getPoints = function () {
  return $('.edit-heavy > .edit-controls > ul > .ts-points');
};

CardDetailElement.createPoints = function () {
  let $points = $('<ul/>', null).appendTo('.edit-heavy > .edit-controls');

  $points.createPoint = function () {
    let attrs = {
      class: 'ts-points'
    };

    return $('<li/>', attrs).appendTo($points);
  };

  return $points;
};

CardDetailElement.getTitle = function () {
  return $('.card-detail-title > .edit > textarea.field');
};

CardDetailElement.getButton = function () {
  return $('.card-detail-title > .edit > .edit-controls > .js-save-edit');
};