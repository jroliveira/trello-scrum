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

  describe('when get point', function () {
    beforeEach(function () {
      sandbox.stub(CardElement.prototype, 'getPoint').returns(new ElementFake());
    });

    it('should call _elem.getTitle() one time', function () {
      sandbox.spy(CardElement.prototype, 'getTitle');

      card.getPoint();

      sinon.assert.calledOnce(CardElement.prototype.getTitle);
    });

    it('should call $title.text() one time', function () {
      sandbox.stub(CardElement.prototype, 'getTitle').returns(new ElementFake());
      sandbox.spy(ElementFake.prototype, 'text');

      card.getPoint();

      sinon.assert.calledOnce(ElementFake.prototype.text);
    });

    describe('point in the title', function () {
      beforeEach(function () {
        sandbox.stub(CardElement.prototype, 'getTitle').returns(new ElementFake());
        sandbox.stub(ElementFake.prototype, 'text').returns('(8) Title of card');
      });

      it('should equal to 8', function () {
        let point = card.getPoint();

        point.should.equal('8');
      });
    });

    describe('no point in the title', function () {
      beforeEach(function () {

      });

      it('should call $point.exists() one time', function () {
        sandbox.spy(ElementFake.prototype, 'exists');

        card.getPoint();

        sinon.assert.calledOnce(ElementFake.prototype.exists);
      });

      describe('point found', function () {
        beforeEach(function () {
          sandbox.stub(ElementFake.prototype, 'exists').returns(true);
          sandbox.stub(ElementFake.prototype, 'getText').returns(new ElementFake());
          sandbox.stub(ElementFake.prototype, 'text').returns(1);
        });

        it('should call getEstimatePoints.execute() one time', function () {
          sandbox.spy(GetEstimatePoints.prototype, 'execute');

          card.getPoint();

          sinon.assert.calledOnce(GetEstimatePoints.prototype.execute);
        });

        it('should call $.inArray() one time', function () {
          sandbox.spy($, 'inArray');

          card.getPoint();

          sinon.assert.calledOnce($.inArray);
        });

        describe('in array', function () {
          beforeEach(function () {
            sandbox.stub($, 'inArray').returns(0);
          });

          it('should equal to 1', function () {
            let point = card.getPoint();

            point.should.equal(1);
          });
        });

        describe('out of array', function () {
          beforeEach(function () {
            sandbox.stub($, 'inArray').returns(-1);
          });

          it('should equal to null', function () {
            let point = card.getPoint();

            should.not.exist(point);
          });
        });
      });

      describe('not point found', function () {
        beforeEach(function () {
          sandbox.stub(ElementFake.prototype, 'exists').returns(false);
        });

        it('should equal to null', function () {
          let point = card.getPoint();

          should.not.exist(point);
        });
      });
    });
  });

  describe('when show point', function () {
    beforeEach(function () {
      sandbox.stub(CardElement.prototype, 'getPoint').returns(new ElementFake());
      sandbox.stub(ElementFake.prototype, 'getText').returns(new ElementFake());
    });

    it('should call $point.exists() one time', function () {
      sandbox.spy(ElementFake.prototype, 'exists');

      card.showPoint(1);

      sinon.assert.calledOnce(ElementFake.prototype.exists);
    });

    describe('not point found', function () {
      beforeEach(function () {
        sandbox.stub(ElementFake.prototype, 'exists').returns(false);
      });

      it('should call _elem.createPoint() one time', function () {
        sandbox.spy(CardElement.prototype, 'createPoint');

        card.showPoint(1);

        sinon.assert.calledOnce(CardElement.prototype.createPoint);
      });
    });

    it('should call $text.text(1) one time', function () {
      let spy = sandbox.spy(ElementFake.prototype, 'text');

      card.showPoint(1);

      spy.withArgs(1).calledOnce.should.equal(true);
    });
  });
});