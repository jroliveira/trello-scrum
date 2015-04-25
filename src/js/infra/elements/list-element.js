'use strict';

function ListElement(elem) {
  this._elem = elem;
}

ListElement.getLists = function () {
  return $('.list');
};

ListElement.prototype.getHead = function () {
  return $($(this._elem).find('.list-header'));
};

ListElement.prototype.getPoints = function () {
  return $($(this._elem).find('.list-header > .ts-points'));
};

ListElement.prototype.getCards = function () {
  return $($(this._elem).find('.list-card:not(.placeholder)'));
};