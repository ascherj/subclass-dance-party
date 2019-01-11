describe('cowDancer', function() {

  var cowDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cowDancer = new CowDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(cowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(cowDancer.$node, 'toggleClass');
    cowDancer.step();
    expect(cowDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(cowDancer, 'step');
      expect(cowDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(cowDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(cowDancer.step.callCount).to.be.equal(2);
    });
  });
});
