'use strict';

function List(elem) {
    this._elem = elem;
}

List.prototype.getPoints = function () {
    var points = 0;

    var cards = this.getCards();
    $.each(cards, function (i, card) {
        points += card.getPoint();
    });

    return points;
};

List.prototype.getCards = function () {
    var cards = [];

    var cardsElem = $(this._elem).find('.list-card:not(.placeholder)');
    $.each(cardsElem, function (i, cardElem) {
        cards.push(new Card(cardElem));
    });

    return cards;
};

List.prototype.showPoints = function (points) {
    var $header = $($(this._elem).find('.list-header'));

    var $points = $($header.find('.ts-points'));
    if (!$points.exists()) {
        var attrs = {
            class: 'ts-points'
        };

        $points = $('<span>', attrs).appendTo($header);
    }

    $points.text(points);
};