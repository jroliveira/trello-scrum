'use strict';

function Card(elem) {
    this._elem = elem;
}

Card.prototype.getPoint = function () {
    let title = this._getTitle();
    
    let regex = /\((.\d*?)\)/g;
    let matches = regex.exec(title);
    
    return matches ? parseInt(matches[1]) : 0;
};

Card.prototype.showPoint = function (point) {
    let $point = $($(this._elem).find('.badges > .ts-points'));
    if (!$point.exists()) {
        let attrs = {
            class: 'ts-points'
        };

        let $badges = $($(this._elem).find('.badges'));
        $point = $('<span>', attrs).appendTo($badges);
    }

    let currentPoint = parseInt($point.text());
    if (currentPoint === point) {
        return;
    }

    $point.text(point);

    let regex = /\((.\d*?)\)/g;
    
    let $title = $($(this._elem).find('.list-card-title'));
    let title = this._getTitle();
    if (title) {
        if (title.match(regex)) {
            $title.html($title.html().replace(regex, ''));
        }
    }
};

Card.prototype._getTitle = function () {
    let $title = $($(this._elem).find('.list-card-title'));
    if (!$title.attr('data-title')) {
        let title = $title.text();
        title = title.replace(title.substr(0, title.indexOf('(')), '');
        $title.attr('data-title', title);
    }

    return $title.attr('data-title');
};

Card.showEstimatePoints = function () {
    let $controls = $('.edit-heavy > .edit-controls');
    if ($controls.find('.ts-points').exists()) {
        return;
    }

    let $points = $('<ul/>', null).appendTo($controls);

    let attrs = {
        class: 'ts-points'
    };

    let onclick = function onclick() {
        let value = '({0}) '.format($(this).text());

        let regex = /\((.\d*?)\)/g;
        
        let $title = $('.card-detail-title > .edit > textarea.field');
        $title[0].value = $title.val().match(regex) ? $title.val().replace(regex, value) : '{0}{1}'.format(value, $title.val());

        $('.card-detail-title > .edit > .edit-controls > .js-save-edit').click();
    };

    let estimatePoints = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100'];
    for (let i in estimatePoints) {
        $points
            .append($('<li/>', attrs)
                .text(estimatePoints[i])
                .click(onclick));
    }
};