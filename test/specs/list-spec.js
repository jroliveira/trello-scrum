'use strict';

describe('List', function () {
  let sandbox;
  let list;

  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    list = new List(sinon.spy());
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('when remove points', function () {
    it('should call _elem.getPoints() one time', function () {
      sandbox.spy(ListElement.prototype, 'getPoints');

      list.removePoints();

      sinon.assert.calledOnce(ListElement.prototype.getPoints);
    });

    it('should call $points.remove() one time', function () {
      sandbox.spy(ElementFake.prototype, 'remove');
      sandbox.stub(ListElement.prototype, 'getPoints').returns(new ElementFake());

      list.removePoints();

      sinon.assert.calledOnce(ElementFake.prototype.remove);
    });
  });  
});