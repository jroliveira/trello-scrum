'use strict';

function App() {
  this._elem = new AppElement();

  this._board = new Board();
  this._board.showSettings();

  let _this = this;

  let observer = new Observer();
  observer.observe(_this._elem.getHeader().get(0), function (mutations) {
    _this.onLoad(mutations);
  });
}

App.prototype.onLoad = function (mutations) {
  let skipped = true;

  $.each(mutations, function (i, mutation) {
    skipped = $(mutation.target).attr('class') === 'js-phrase';
  });

  if (skipped) {
    return;
  }

  let _this = this;

  Thread.sleep(200, function () {
    _this._board = new Board();
  });
};