'use strict';

function WindowElement() {}

WindowElement.prototype.showScrumSettings = function () {
  let _this = this;

  let settingsUrl = chrome.extension.getURL('/src/templates/settings.html');

  $.get(settingsUrl, function (data) {
    $('body').addClass('window-up');    
    $('.window-overlay > .window').show();
    $('.window-overlay > .window > .window-wrapper').html(data);
    
    $('.window-overlay').click(_this._removeScrumSettings);
  });
};

WindowElement.prototype._removeScrumSettings = function () {
  $('body').removeClass('window-up');
  $('.window-overlay > .window').hide();
  $('.window-overlay > .window > .window-wrapper').html('');
};