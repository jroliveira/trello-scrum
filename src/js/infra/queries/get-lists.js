'use strict';

function GetLists() {
  this._elem = $('.list');
}

GetLists.prototype.execute = function () {
  let lists = [];

  $.each(this._elem, function (i, listElem) {
    lists.push(new List(listElem));
  });

  return lists;
};