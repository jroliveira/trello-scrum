function Card(elem) {
    this.elem = elem;
}

Card.prototype.point = function () {
    var title = this._getTitle(),
        regex = /\((.\d*?)\)/g,
        matches = regex.exec(title),
        points = 0;

    if (matches) {
        points = parseInt(matches[1]);
    }

    return points;
}

Card.prototype._getTitle = function () {
    return $(this.elem).find('.list-card-title').html();
}