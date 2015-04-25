'use strict';

function Card(elem) {
  this._elem = new CardElement(elem);
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
  let $point = this._elem.getPoint();

  $point.remove();
};

Card.prototype.showPoint = function (point) {
  let $point = this._elem.getPoint();

  if (!$point.exists()) {
    this._elem.createPoint();
  }

  let $text = $point.getText();

  let currentPoint = Number($text.text());
  if (currentPoint === point) {
    return;
  }

  $text.text(point);

  let $title = this._elem.getTitle();
  let title = this._getTitle();

  let regex = /\((.\d*?)\)/g;

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

Card.showEstimatePoints = function () {
  let $points = CardElement.getPoints();

  if ($points.exists()) {
    return;
  }

  $points = CardElement.createPoints();

  let onclick = function onclick() {
    let value = '({0}) '.format($(this).text());

    let regex = /\((.\d*?)\)/g;

    let $title = CardElement.getTitle();
    $title[0].value = $title.val().match(regex) ? $title.val().replace(regex, value) : '{0}{1}'.format(value, $title.val());

    CardElement.getButton().click();
  };

  let estimatePoints = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100'];
  for (let i in estimatePoints) {
    $points.createPoint(estimatePoints[i], onclick);
  }
};