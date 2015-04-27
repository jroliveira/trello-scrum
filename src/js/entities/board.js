'use strict';

function Board() {
  this._elem = new BoardElement();
}

Board.prototype.showSettings = function () {
  let $settings = this._elem.getSettings();

  if ($settings.exists()) {
    return;
  }

  this._elem.createSettings(this._showSettingsClick);
};

Board.prototype._showSettingsClick = function () {
  let $windowElement = new WindowElement();
  
  $windowElement.showScrumSettings();
};