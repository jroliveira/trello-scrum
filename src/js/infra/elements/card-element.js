'use strict';

function CardElement(elem) {
  this._elem = elem;
}

CardElement.prototype.getTitle = function () {
  return $($(this._elem).find('.list-card-title'));
};

CardElement.prototype.getPoint = function () {
  let $point = $($(this._elem).find('.badges > .badge-ts-points'));

  $point.getText = function () {
    return $($point.find('span.badge-text'));
  };

  $point.isNew = function () {
    let count = Number($point.attr('data-isnew-count'));

    if (count > 1) {
      return false;
    }

    $point.attr('data-isnew-count', count + 1);

    return true;
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
    .attr('data-isnew-count', 0)
    .appendTo($badges);

  return this.getPoint();
};