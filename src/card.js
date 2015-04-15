function Card(elem) {
    this.elem = elem;
}

Card.prototype._getTitle = function () {
    return $(this.elem).find('.list-card-title').html();
}

Card.prototype.point = function () {
    var regex = /\((.\d*?)\)/g,
        title = this._getTitle(),
        matches = [],
        points = 0;

    while (matches = regex.exec(title)) {
        points += parseInt(matches[1]);
    }

    return points;
}