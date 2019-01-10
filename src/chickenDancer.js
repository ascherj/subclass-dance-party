var makeChickenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
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

makeChickenDancer.prototype = Object.create(makeDancer.prototype);
makeChickenDancer.prototype.constructor = makeChickenDancer;

makeChickenDancer.prototype.step = function() {
  this.$node.toggleClass('chicken');
};
