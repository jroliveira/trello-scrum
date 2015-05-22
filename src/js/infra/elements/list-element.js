'use strict';

function ListElement(elem) {
  this._elem = elem;
}

ListElement.prototype.getPoints = function () {
  return $($(this._elem).find('.list-header > .ts-points'));
};

ListElement.prototype.createPoints = function () {
  let $header = $($(this._elem).find('.list-header'));

  let attrs = {
    class: 'ts-points'
  };

  $('<span>', attrs).appendTo($header);

  return this.getPoints();
};

ListElement.prototype.getCards = function () {
  return $($(this._elem).find('.list-card:not(.placeholder)'));
};