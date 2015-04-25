'use strict';

function Card(elem) {
  this._elem = new CardElement(elem);
}

Card.prototype.removePoint = function () {
  let $point = this._elem.getPoint();

  $point.remove();
};

Card.prototype.getPoint = function () {
  let title = this._getTitle();

  let regex = /\((.*?)\)/g;
  let matches = regex.exec(title);

  if (!matches) {
    return null;
  }

  return matches[1];
};

Card.prototype.showPoint = function (point) {
  let $point = this._elem.getPoint();

  if (!$point.exists()) {
    $point = this._elem.createPoint();
  }

  let $text = $point.getText();

  let currentPoint = $text.text();
  if (currentPoint == point) {
    return;
  }

  $text.text(point);

  let $title = this._elem.getTitle();
  let title = this._getTitle();

  let regex = /\((.*?)\)/g;

  if (title.match(regex)) {
    $title.html($title.html().replace(regex, ''));
  }
};

Card.prototype._getTitle = function () {
  let $title = this._elem.getTitle();

  let data = $title.getData();
  if (data) {
    return data;
  }

  data = $title.text();
  data = data.replace(data.substr(0, data.indexOf('(')), '');

  return $title.setData(data);
};