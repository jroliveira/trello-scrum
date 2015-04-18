'use strict';

function App() {
    var getLists = new GetLists();
    this.lists = getLists.execute();
}

App.prototype.updateListPoints = function () {
    $.each(this.lists, function (i, list) {
        var points = list.points();
        list.showPoints(points);
    });
};