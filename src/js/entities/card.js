'use strict';

function Card(elem) {
    this._elem = elem;
}

Card.prototype.point = function () {
    var title = this._getTitle(),
        regex = /\((.\d*?)\)/g,
        matches = regex.exec(title),
        points = 0;

    if (matches) {
        points = parseInt(matches[1]);
    }

    return points;
};

Card.prototype._getTitle = function () {
    return $(this._elem).find('.list-card-title').html();
};

Card.showEstimatePoints = function () {
    var $controls = $('.edit-heavy > .edit-controls');

    if ($controls.find('.ts-points').exists()) {
        return;
    }

    var pointsConfig = {
            class: 'ts-points'
        },
        $points = $('<ul/>', pointsConfig).appendTo($controls);

    var estimatePoints = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100'];
    for (var i in estimatePoints) {
        $points
            .append($('<li/>', null)
                .text(estimatePoints[i])
                .click(function () {
                    var value = '({0}) '.format($(this).text()),
                        $title = $('.card-detail-title > .edit > textarea.field'),
                        regex = /\((.\d*?)\)/g;

                    $title[0].value = $title.val().match(regex) ? $title.val().replace(regex, value) : '{0}{1}'.format(value, $title.val());

                    $('.card-detail-title .edit .js-save-edit').click();
                }));
    }
};