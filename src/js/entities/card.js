'use strict';

function Card(elem) {
  this._elem = elem;
}

Card.prototype.getPoint = function () {
  let title = this._getTitle();

  let regex = /\((.\d*?)\)/g;
  let matches = regex.exec(title);

  if (!matches) {
    return 0;
  }

  if (isNaN(matches[1])) {
    return 0;
  }

  return Number(matches[1]);
};

Card.prototype.clearPoint = function () {
  let $point = $($(this._elem).find('.badges > .badge-ts-points'));

  if (!$point.exists()) {
    return;
  }

  $point.remove();
};

Card.prototype.showPoint = function (point) {
  let $point = this._getOrCreatePointElement();

  let currentPoint = Number($point.text());
  if (currentPoint === point) {
    return;
  }

  $point.find('span.badge-text').text(point);

  let $title = $($(this._elem).find('.list-card-title'));
  let title = this._getTitle();

  let regex = /\((.\d*?)\)/g;

  if (title.match(regex)) {
    $title.html($title.html().replace(regex, ''));
  }
};

Card.prototype._getOrCreatePointElement = function () {
  let $point = $($(this._elem).find('.badges > .badge-ts-points'));

  if ($point.exists()) {
    return $point;
  }

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

  let $badges = $($(this._elem).find('.badges'));
  return $('<div>', attrs.container)
    .append($('<span>', attrs.icon))
    .append($('<span>', attrs.text))
    .appendTo($badges);
};

Card.prototype._getTitle = function () {
  let $title = $($(this._elem).find('.list-card-title'));

  if ($title.attr('data-title')) {
    return $title.attr('data-title');
  }

  let title = $title.text();
  title = title.replace(title.substr(0, title.indexOf('(')), '');

  return $title.attr('data-title', title);
};

Card.showEstimatePoints = function () {
  let $controls = $('.edit-heavy > .edit-controls');
  if ($controls.find('.ts-points').exists()) {
    return;
  }

  let $points = $('<ul/>', null).appendTo($controls);

  let attrs = {
    class: 'ts-points'
  };

  let onclick = function onclick() {
    let value = '({0}) '.format($(this).text());

    let regex = /\((.\d*?)\)/g;

    let $title = $('.card-detail-title > .edit > textarea.field');
    $title[0].value = $title.val().match(regex) ? $title.val().replace(regex, value) : '{0}{1}'.format(value, $title.val());

    $('.card-detail-title > .edit > .edit-controls > .js-save-edit').click();
  };

  let estimatePoints = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100'];
  for (let i in estimatePoints) {
    $points
      .append($('<li/>', attrs)
        .text(estimatePoints[i])
        .click(onclick));
  }
};