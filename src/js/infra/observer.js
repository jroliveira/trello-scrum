'use strict';

function Observer() {
    this.config = {
        childList: true,
        characterData: true,
        attributes: false,
        subtree: true
    };
}

Observer.prototype.observe = function (elem, callback) {
    var observer = new MutationObserver(callback);
    observer.observe(elem, this.config);
};