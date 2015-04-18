'use strict';

function Card(elem) {
    this.elem = elem;
    this.estimatePoints = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100'];

    this._observeTitle();
}

Card.prototype._observeTitle = function () {
    var self = this,
        observer = new Observer();

    observer.observe(document.body, function (mutations) {
        $.each(mutations, function (index, mutation) {
            var $target = $(mutation.target);

            if ($target.hasClass('edit-controls')) {
                self._showEstimatePoints();
            }
        });
    });
};

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
    return $(this.elem).find('.list-card-title').html();
};

Card.prototype._showEstimatePoints = function () {
    var $controls = $('.edit-heavy > .edit-controls');

    if ($controls.find('.ts-points').exists()) {
        return;
    };

    var pointsConfig = {
            class: 'ts-points'
        },
        $points = $('<ul/>', pointsConfig).appendTo($controls);

    for (var i in this.estimatePoints) {
        $points
            .append($('<li/>', null)
                .text(this.estimatePoints[i])
                .click(this._selectPoint));
    }
};

Card.prototype._selectPoint = function () {
    var value = '({0}) '.format($(this).text()),
        $title = $('.card-detail-title > .edit > textarea.field'),
        regex = /\((.\d*?)\)/g;

    $title[0].value = $title.val().match(regex) ? $title.val().replace(regex, value) : '{0}{1}'.format(value, $title.val());

    $('.card-detail-title .edit .js-save-edit').click();
};