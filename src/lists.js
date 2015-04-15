function Lists() {
    this.elem = $('.list');
}

Lists.prototype.all = function () {
    var lists = [];
    $.each(this.elem, function (i, listElem) {
        lists.push(new List(listElem));
    });

    return lists;
}