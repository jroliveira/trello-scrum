'use strict';

var REGEX = /\((.\d*?)\)/g;

function Card(elem) {
    this._elem = elem;
}

Card.prototype.getPoint = function () {
    var title = this._getTitle();
    var matches = REGEX.exec(title);

    return matches ? parseInt(matches[1]) : 0;
};

Card.prototype.showPoint = function (point) {
    var $point = $($(this._elem).find('.badges > .ts-points'));
    if (!$point.exists()) {
        var attrs = {
            class: 'ts-points'
        };

        var $badges = $($(this._elem).find('.badges'));
        $point = $('<span>', attrs).appendTo($badges);
    }

    var currentPoint = $point.text();
    if (currentPoint == point) {
        return;
    }

    $point.text(point);

    var $title = $($(this._elem).find('.list-card-title'));

    var title = this._getTitle();
    if (title) {
        if (title.match(REGEX)) {
            $title.html($title.html().replace(REGEX, ''));
        }
    }
};

Card.prototype._getTitle = function () {
    var $title = $($(this._elem).find('.list-card-title'));
    if (!$title.attr('data-title')) {
        var title = $title.text();
        title = title.replace(title.substr(0, title.indexOf('(')), '');
        $title.attr('data-title', title);
    }

    return $title.attr('data-title');
};

Card.showEstimatePoints = function () {
    var $controls = $('.edit-heavy > .edit-controls');
    if ($controls.find('.ts-points').exists()) {
        return;
    }

    var $points = $('<ul/>', null).appendTo($controls);

    var attrs = {
        class: 'ts-points'
    };

    var onclick = function onclick() {
        var value = '({0}) '.format($(this).text());

        var $title = $('.card-detail-title > .edit > textarea.field');
        $title[0].value = $title.val().match(REGEX) ? $title.val().replace(REGEX, value) : '{0}{1}'.format(value, $title.val());

        $('.card-detail-title > .edit > .edit-controls > .js-save-edit').click();
    };

    var estimatePoints = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100'];
    for (var i in estimatePoints) {
        $points
            .append($('<li/>', attrs)
                .text(estimatePoints[i])
                .click(onclick));
    }
};