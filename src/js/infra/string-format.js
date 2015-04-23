'use strict';

String.prototype.format = function () {
    let str = this;

    for (let i = 0; i < arguments.length; i++) {
        let reg = new RegExp("\\{" + i + "\\}", "gm");
        str = str.replace(reg, arguments[i]);
    }

    return str;
};