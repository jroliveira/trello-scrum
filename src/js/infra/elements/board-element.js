'use strict';

function BoardElement() {}

BoardElement.prototype.getLists = function () {
  return $('.list');
};

BoardElement.prototype.getSettings = function () {
  return $('.board-header > .board-header-btns.mod-right > .settings-ts-btn');
};

BoardElement.prototype.createSettings = function (onclick) {
  let $header = $('.board-header > .board-header-btns.mod-right');

  let attrs = {
    a: {
      class: 'board-header-btn settings-ts-btn'
    },
    icon: {
      class: 'board-header-btn-icon icon-sm icon-gear'
    },
    text: {
      class: 'board-header-btn-text u-text-underline'
    }
  };

  return $('<a>', attrs.a)
    .append($('<span>', attrs.icon))
    .append($('<span>', attrs.text).html('Scrum settings'))
    .click(onclick)
    .prependTo($header);
};