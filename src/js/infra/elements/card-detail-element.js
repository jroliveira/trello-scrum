'use strict';

function CardDetailElement() {}

CardDetailElement.getPoints = function () {
  return $('.edit-heavy > .edit-controls > ul > .ts-points');
};

CardDetailElement.createPoints = function () {
  let $points = $('<ul/>', null).appendTo('.edit-heavy > .edit-controls');

  $points.createPoint = function (point, onclick) {
    let attrs = {
      class: 'ts-points'
    };

    $points
      .append($('<li/>', attrs)
        .text(point)
        .click(onclick));
  };

  return $points;
};

CardDetailElement.getTitle = function () {
  return $('.card-detail-title > .edit > textarea.field');
};

CardDetailElement.getButton = function () {
  return $('.card-detail-title > .edit > .edit-controls > .js-save-edit');
};