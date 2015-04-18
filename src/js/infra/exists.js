$.fn.exists = function (callback) {
    var args = [].slice.call(arguments, 1);

    return this.length > 0;
};