'use strict';

function App() {
    this._observeBoard();
}

App.prototype._observeBoard = function () {
    var _this = this;

    var observer = new Observer();
    observer.observe(document.body, function (mutations) {
        $.each(mutations, function (index, mutation) {
            var $target = $(mutation.target);

            if ($target.hasClass('edit-controls')) {
                Card.showEstimatePoints();
            }

            if ($target.hasClass('list-cards') || $target.hasClass('list-card-title')) {
                _this.updatePoints();
            }
        });
    });
};

App.prototype.updatePoints = function () {
    $.each(this._getLists(), function (i, list) {
        var points = list.getPoints();
        list.showPoints(points);

        $.each(list.getCards(), function (i, card) {
            var point = card.getPoint();
            card.showPoint(point);
        });
    });
};

App.prototype._getLists = function () {
    var getLists = new GetLists();
    return getLists.execute();
};