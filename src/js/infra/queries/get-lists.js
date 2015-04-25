'use strict';

function GetLists() {
  this.$_lists = ListElement.getLists();
}

GetLists.prototype.execute = function () {
  let lists = [];

  $.each(this.$_lists, function (i, $list) {
    lists.push(new List($list));
  });

  return lists;
};