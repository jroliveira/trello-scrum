'use strict';

function Card(elem) {
  this._elem = new CardElement(elem);
}

Card.prototype.removePoint = function () {
  let $point = this._elem.getPoint();

  $point.remove();
};

Card.prototype.getPoint = function () {
  let _this = this;

  let getPoint = function getPoint() {
    let $title = _this._elem.getTitle();
    let title = $title.text();

    let regex = /\((.*?)\)/g;
    let matches = regex.exec(title);

    if (matches) {
      return matches[1];
    }

    let $point = _this._elem.getPoint();

    if (!$point.exists()) {
      return null;
    }

    let $text = $point.getText();

    return $text.text();
  };

  let point = getPoint();

  if (!point) {
    return null;
  }

  let getEstimatePoints = new GetEstimatePoints();
  let estimatePoints = getEstimatePoints.execute();

  let found = $.inArray(point, estimatePoints);

  if (found < 0) {
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