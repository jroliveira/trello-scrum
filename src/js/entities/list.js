'use strict';

function List(elem) {
  this._elem = new ListElement(elem);
}

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
    points += card.getPoint();
  });

  return points;
};

List.prototype.clearPoints = function () {
  let $points = this._elem.getPoints();

  $points.remove();
};

List.prototype.showPoints = function (points) {
  let $points = this._getOrCreatePointElement();

  let currentPoints = Number($points.text());
  if (currentPoints === points) {
    return;
  }

  $points.text(points);
};

List.prototype._getOrCreatePointElement = function () {
  let $points = this._elem.getPoints();

  if ($points.exists()) {
    return $points;
  }

  let attrs = {
    class: 'ts-points'
  };

  let $header = this._elem.getHead();
  return $('<span>', attrs).appendTo($header);
};