'use strict';

function Board() {
  this._elem = new BoardElement();
  this._lists = [];

  let _this = this;

  $.each(_this._elem.getLists(), function (i, $list) {
    let newList = new List($list);

    newList.onCardChange = function () {
      _this._updateList(this);
    };

    _this._lists.push(newList);
    _this._updateList(newList);
  });  
}

Board.prototype._updateList = function (list) {
  let points = list.getPoints();

  if (points > 0) {
    list.showPoints(points);
  } else {
    list.removePoints();
  }
};

Board.prototype.showSettings = function () {
  let $settings = this._elem.getSettings();

  if ($settings.exists()) {
    return;
  }

  this._elem.createSettings(function () {
    let $windowElement = new WindowElement();

    $windowElement.showScrumSettings();
  });
};