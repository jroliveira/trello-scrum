'use strict';

describe('Card', function () {
  let sandbox;
  let card;

  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    card = new Card(sinon.spy());
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('when remove point', function () {
    it('should call _elem.getPoint() one time', function () {
      sandbox.spy(CardElement.prototype, 'getPoint');

      card.removePoint();

      sinon.assert.calledOnce(CardElement.prototype.getPoint);
    });

    it('should call $point.remove() one time', function () {
      sandbox.spy(ElementFake.prototype, 'remove');
      sandbox.stub(CardElement.prototype, 'getPoint').returns(new ElementFake());

      card.removePoint();

      sinon.assert.calledOnce(ElementFake.prototype.remove);
    });
  });
});