'use strict';

function List(elem) {
    this._elem = elem;
}

List.prototype.getPoints = function () {
    let points = 0;

    let cards = this.getCards();
    $.each(cards, function (i, card) {
        points += card.getPoint();
    });

    return points;
};

List.prototype.getCards = function () {
    let cards = [];

    let cardsElem = $(this._elem).find('.list-card:not(.placeholder)');
    $.each(cardsElem, function (i, cardElem) {
        cards.push(new Card(cardElem));
    });

    return cards;
};

List.prototype.showPoints = function (points) {
    let $header = $($(this._elem).find('.list-header'));

    let $points = $($header.find('.ts-points'));
    if (!$points.exists()) {
        let attrs = {
            class: 'ts-points'
        };

        $points = $('<span>', attrs).appendTo($header);
    }

    let currentPoints = parseInt($points.text());
    if (currentPoints === points) {
        return;
    }
    
    $points.text(points);
};