'use strict';

function CardDetail() {}

CardDetail.showEstimatePoints = function () {
  let $points = CardDetailElement.getPoints();

  if ($points.exists()) {
    return;
  }

  $points = CardDetailElement.createPoints();

  let onclick = function onclick() {
    let value = '({0}) '.format($(this).text());
    let regex = /\((.\d*?)\)/g;

    let $title = CardDetailElement.getTitle();
    let title = $title.val();

    $title[0].value = title.match(regex) ? title.replace(regex, value) : '{0}{1}'.format(value, title);

    let $button = CardDetailElement.getButton();
    $button.click();
  };

  let getEstimatePoints = new GetEstimatePoints();
  let estimatePoints = getEstimatePoints.execute();

  for (let i in estimatePoints) {
    $points
      .createPoint()
      .text(estimatePoints[i])
      .click(onclick);
  }
};