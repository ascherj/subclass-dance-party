var makeChickenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('chicken');
  this.$node.addClass('scale');

  $('<img src="chicken-1.gif" draggable="true" />')
    .css({
      'height': '100px',
      'width': '100px'
    })
    .on('click', function(e) {
      $(this).attr('src', 'chicken-2.gif');
    })
    .on('dragover', function(e) {
      e.preventDefault();
      $(this).attr('src', 'chicken-3.gif');
    })
    .appendTo(this.$node);
};

makeChickenDancer.prototype = Object.create(makeDancer.prototype);
makeChickenDancer.prototype.constructor = makeChickenDancer;

makeChickenDancer.prototype.zoom = function(node) {
  node.toggleClass('chicken');
  setTimeout(function() {
    makeRainbowDancer.prototype.zoom(node);
  }, 1000);
};

// should be on dancer ?
makeChickenDancer.prototype.lineUp = function(x) {
  this.setPosition('50%', x);
};
