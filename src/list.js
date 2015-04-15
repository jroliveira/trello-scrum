function List(elem) {
    this.elem = elem;
}

List.prototype.cards = function () {
    var cards = [],
        cardsElem = $(this.elem).find('.list-card');

    $.each(cardsElem, function (i, cardElem) {
        cards.push(new Card(cardElem));
    });

    return cards;
}

List.prototype.setPoints = function (points) {
    var headerElem = $(this.elem).find('.list-header');
    $(headerElem).append(points);
}