'use strict';

function CardElement(elem) {
  this._elem = elem;
}

CardElement.prototype.getTitle = function () {
  let $title = $($(this._elem).find('.list-card-title'));

  $title.getData = function () {
    return $title.attr('data-title');
  };

  $title.setData = function (data) {
    return $title.attr('data-title', data);
  };

  return $title;
};

CardElement.prototype.getPoint = function () {
  let $point = $($(this._elem).find('.badges > .badge-ts-points'));

  $point.getText = function () {
    return $($point.find('span.badge-text'));
  };

  return $point;
};

CardElement.prototype.createPoint = function () {
  let $badges = $($(this._elem).find('.badges'));

  let attrs = {
    container: {
      class: 'badge badge-ts-points'
    },
    icon: {
      class: 'badge-icon icon-sm flaticon-icon-ts-points'
    },
    text: {
      class: 'badge-text'
    }
  };

  $('<div>', attrs.container)
    .append($('<span>', attrs.icon))
    .append($('<span>', attrs.text))
    .appendTo($badges);
  
  return this.getPoint();
};

CardElement.prototype.getCards = function () {
  return $($(this._elem).find('.list-card:not(.placeholder)'));
};

CardElement.getPoints = function () {
  return $('.edit-heavy > .edit-controls > ul > .ts-points');
};

CardElement.createPoints = function () {
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

CardElement.getTitle = function () {
  return $('.card-detail-title > .edit > textarea.field');
};

CardElement.getButton = function () {
  return $('.card-detail-title > .edit > .edit-controls > .js-save-edit');
};