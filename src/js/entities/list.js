'use strict';

function List(elem) {
  this._elem = elem;
}

List.prototype.getCards = function () {
  let cards = [];

  let cardsElem = $(this._elem).find('.list-card:not(.placeholder)');
  $.each(cardsElem, function (i, cardElem) {
    cards.push(new Card(cardElem));
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
  let $points = $($(this._elem).find('.list-header > .ts-points'));

  if (!$points.exists()) {
    return;
  }

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
  let $points = $($(this._elem).find('.list-header > .ts-points'));

  if ($points.exists()) {
    return $points;
  }

  let attrs = {
    class: 'ts-points'
  };

  let $header = $($(this._elem).find('.list-header'));
  return $('<span>', attrs).appendTo($header);
};