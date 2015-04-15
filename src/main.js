var lists = new Lists().all();
$.each(lists, function (i, list) {
    var points = 0,
        cards = list.cards();

    $.each(cards, function (i, card) {
        points += card.point();
    });

    list.setPoints(points);
});