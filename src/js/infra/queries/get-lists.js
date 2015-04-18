'use strict';

function GetLists() {
    this.elem = $('.list');
}

GetLists.prototype.execute = function () {
    var lists = [];

    $.each(this.elem, function (i, listElem) {
        lists.push(new List(listElem));
    });

    return lists;
};