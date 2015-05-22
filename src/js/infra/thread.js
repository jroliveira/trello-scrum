'use strict';

function Thread() {}

Thread.sleep = function (milliseconds, callback) {
  setTimeout(callback, milliseconds);
};