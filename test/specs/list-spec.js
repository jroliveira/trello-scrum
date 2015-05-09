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

  describe('when get cards', function () {
    it('should call _elem.getCards() one time', function () {
      sandbox.spy(ListElement.prototype, 'getCards');

      list.getCards();

      sinon.assert.calledOnce(ListElement.prototype.getCards);
    });

    it('should have tree elements', function () {
      sandbox.stub(ListElement.prototype, 'getCards').returns([sinon.spy(), sinon.spy(), sinon.spy()]);

      let cards = list.getCards();

      cards.should.have.length(3);
    });
    
    it('should be empty', function () {
      sandbox.stub(ListElement.prototype, 'getCards').returns([]);

      let cards = list.getCards();

      expect(cards).to.be.empty;
    });
  });  
});