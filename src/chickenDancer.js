var ChickenDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('chicken');

  $('<img src="./lib/chicken-1.gif" draggable="true" />')
    .css({
      'height': '100px',
      'width': '100px'
    })
    .on('click', function(e) {
      $(this).attr('src', './lib/chicken-2.gif');
    })
    .on('dragover', function(e) {
      e.preventDefault();
      $(this).attr('src', './lib/chicken-3.gif');
    })
    .appendTo(this.$node);
};

ChickenDancer.prototype = Object.create(Dancer.prototype);
ChickenDancer.prototype.constructor = ChickenDancer;

ChickenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('chicken');
};
