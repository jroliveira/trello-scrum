'use strict';

function App() {
    this._observeBoard();
}

App.prototype.lists = function () {
    var getLists = new GetLists();
    return getLists.execute();
};

App.prototype.updateListPoints = function () {
    $.each(this.lists(), function (i, list) {
        var points = list.points();
        list.showPoints(points);
    });
};

App.prototype._observeBoard = function () {
    var _this = this,
        observer = new Observer();

    observer.observe(document.body, function (mutations) {
        $.each(mutations, function (index, mutation) {
            var $target = $(mutation.target);

            if ($target.hasClass('edit-controls')) {
                Card.showEstimatePoints();
            }

            if ($target.hasClass('list-cards') || $target.hasClass('list-card-title')) {
                _this.updateListPoints();
            }
        });
    });
};