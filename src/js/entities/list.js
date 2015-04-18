function List(elem) {
    this.elem = elem;
    this.actualPoints = 0;

    this._observeCards();
}

List.prototype._observeCards = function () {
    var self = this,
        observer = new Observer();

    observer.observe(this.elem, function () {
        var actualPoints = self.actualPoints,
            newPoints = self.points();

        if (actualPoints !== newPoints) {
            self.showPoints(newPoints);
        }
    });
}

List.prototype.points = function () {
    var points = 0,
        cards = this.cards();

    $.each(cards, function (i, card) {
        points += card.point();
    });

    this.actualPoints = points;
    return points;
}

List.prototype.cards = function () {
    var cards = [],
        cardsElem = $(this.elem).find('.list-card');

    $.each(cardsElem, function (i, cardElem) {
        cards.push(new Card(cardElem));
    });

    return cards;
}

List.prototype.showPoints = function (points) {
    var headerElem = $(this.elem).find('.list-header'),
        pointsElem = $(headerElem).find('.trell-scrum-points');

    if (!pointsElem.exists()) {
        $(headerElem).append('<span class="trell-scrum-points"></span>');
        pointsElem = $(headerElem).find('.trell-scrum-points');
    }

    $(pointsElem).html(points)
}