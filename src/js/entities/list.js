'use strict';

function List(elem) {
  this._elem = new ListElement(elem);
  this._cards = [];

  let _this = this;

  $.each(_this._elem.getCards(), function (i, $card) {
    let newCard = new Card($card, _this);

    newCard.onChange = function () {
      _this._updateCard(this);
      _this.onCardChange();
    };

    _this._cards.push(newCard);
    _this._updateCard(newCard);
  });
}

List.prototype.onCardChange = function () {};

List.prototype._updateCard = function (card) {
  let point = card.getPoint();

  if (point) {
    card.showPoint(point);
  } else {
    card.removePoint();
  }
};

List.prototype.removePoints = function () {
  let $points = this._elem.getPoints();

  $points.remove();
};

List.prototype.getPoints = function () {
  let points = 0;

  $.each(this._cards, function (i, card) {
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