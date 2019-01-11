describe('chickenDancer', function() {

  var chickenDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    chickenDancer = new ChickenDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(chickenDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function toggles the chicken class', function() {
    sinon.spy(chickenDancer.$node, 'toggleClass');
    chickenDancer.step();
    expect(chickenDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(chickenDancer, 'step');
      expect(chickenDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(chickenDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(chickenDancer.step.callCount).to.be.equal(2);
    });
  });
});
