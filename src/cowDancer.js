var CowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('cow');

  $('<img src="./lib/moo-1.gif" draggable="true" />')
    .css({
      'height': '100px',
      'width': '100px'
    })
    .on('mouseover', function(e) {
      $(this).attr('src', './lib/moo-2.gif');
    })
    .on('click', function(e) {
      e.preventDefault();
      $(this).attr('src', './lib/moo-3.png');
    })
    .appendTo(this.$node);
};

CowDancer.prototype = Object.create(Dancer.prototype);
CowDancer.prototype.constructor = CowDancer;

CowDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('cow');
};
