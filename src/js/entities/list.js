'use strict';

function List(elem) {
  this._elem = new ListElement(elem);
}

List.prototype.removePoints = function () {
  let $points = this._elem.getPoints();

  $points.remove();
};

List.prototype.getCards = function () {
  let cards = [];

  let $cards = this._elem.getCards();
  $.each($cards, function (i, $card) {
    cards.push(new Card($card));
  });

  return cards;
};

List.prototype.getPoints = function () {
  let points = 0;

  let cards = this.getCards();
  $.each(cards, function (i, card) {
    let point = card.getPoint();

    if (!point) {
      return;
    }

    if (isNaN(point)) {
      return;
    }

    points += Number(point);
  });

  return points;
};

List.prototype.showPoints = function (points) {
  let $points = this._elem.getPoints();

  if (!$points.exists()) {
    $points = this._elem.createPoints();
  }

  let currentPoints = Number($points.text());
  if (currentPoints === points) {
    return;
  }

  $points.text(points);
};