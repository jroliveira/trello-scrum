'use strict';

function CardDetail() {
  this._elem = new CardDetailElement();
}

CardDetail.prototype.showEstimatePoints = function () {
  let $points = this._elem.getPoints();

  if ($points.exists()) {
    return;
  }

  $points = this._elem.createPoints();
  
  let _this = this;

  let onclick = function onclick() {
    let value = '({0}) '.format($(this).text());
    let regex = /\((.\d*?)\)/g;

    let $title = _this._elem.getTitle();
    let title = $title.val();

    $title[0].value = title.match(regex) ? title.replace(regex, value) : '{0}{1}'.format(value, title);

    let $button = _this._elem.getButton();
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