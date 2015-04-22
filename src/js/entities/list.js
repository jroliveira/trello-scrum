'use strict';

function List(elem) {
    this._elem = elem;
}

List.prototype.points = function () {
    var points = 0,
        cards = this.cards();

    $.each(cards, function (i, card) {
        points += card.point();
    });

    this.actualPoints = points;
    return points;
};

List.prototype.cards = function () {
    var cards = [],
        cardsElem = $(this._elem).find('.list-card:not(.placeholder)');

    $.each(cardsElem, function (i, cardElem) {
        cards.push(new Card(cardElem));
    });

    return cards;
};

List.prototype.showPoints = function (points) {
    var $header = $($(this._elem).find('.list-header')),
        $points = $($header.find('.ts-points'));

    if (!$points.exists()) {
        var pointsConfig = {
            class: 'ts-points'
        };

        $points = $('<span>', pointsConfig).appendTo($header);
    }

    $points.text(points);
};