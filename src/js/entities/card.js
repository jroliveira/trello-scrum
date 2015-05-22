'use strict';

function Card(elem, list) {
  this._elem = new CardElement(elem);
  this._list = list;

  let _this = this;
  
  let observer = new Observer();
  observer.observe(_this._elem.getTitle().get(0), function () {
    _this.onChange();
  });
}

Card.prototype.onChange = function () {};

Card.prototype.removePoint = function () {
  let $point = this._elem.getPoint();

  $point.remove();
};

Card.prototype.getPoint = function () {
  let $title = this._elem.getTitle();
  let title = $title.text();

  let regex = /\((.[0-9]*?)\)/g;
  let matches = regex.exec(title);

  if (matches) {
    return matches[1];
  }

  let $point = this._elem.getPoint();

  if (!$point.exists()) {
    return null;
  }

  //if (!$point.isNew()) {
  //  return null;
  //}

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

  let regex = /\((.[0-9]*?)\)/g;
  let matches = regex.exec(title);

  if (matches) {
    $title.html($title.html().replace(matches[0], ''));
  }
};