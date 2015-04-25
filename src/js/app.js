'use strict';

function App() {
  this._observeBoard();
}

App.prototype._observeBoard = function () {
  let _this = this;

  let observer = new Observer();
  observer.observe(document.body, function (mutations) {
    $.each(mutations, function (index, mutation) {
      let $target = $(mutation.target);

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
    let points = list.getPoints();

    if (points > 0) {
      list.showPoints(points);
    } else {
      list.clearPoints();
    }

    $.each(list.getCards(), function (i, card) {
      let point = card.getPoint();

      if (point > 0) {
        card.showPoint(point);
      } else {
        card.clearPoint();
      }
    });
  });
};

App.prototype._getLists = function () {
  let getLists = new GetLists();
  return getLists.execute();
};