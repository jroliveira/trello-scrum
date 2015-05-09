'use strict';

function Card(elem) {
  this._elem = new CardElement(elem);
}

Card.prototype.removePoint = function () {
  let $point = this._elem.getPoint();

  $point.remove();
};

Card.prototype.getPoint = function () {
  let $title = this._elem.getTitle();
  let title = $title.text();

  let regex = /\((.*?)\)/g;
  let matches = regex.exec(title);

  if (matches) {
    return matches[1];
  }

  let $point = this._elem.getPoint();

  if (!$point.exists()) {
    return null;
  }

  let $text = $point.getText();
  let point = $text.text();

  if (!point) {
    return null;
  }

  return point;
};

Card.prototype.showPoint = function (point) {
  let $point = this._elem.getPoint();

  if (!$point.exists()) {
    $point = this._elem.createPoint();
  }

  let $text = $point.getText();

  let currentPoint = $text.text();
  if (currentPoint === point) {
    return;
  }

  $text.text(point);

  let $title = this._elem.getTitle();
  let title = $title.text();

  let regex = /\((.*?)\)/g;

  if (title.match(regex)) {
    $title.html($title.html().replace(regex, ''));
  }
};