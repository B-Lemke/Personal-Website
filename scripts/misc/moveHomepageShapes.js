function MoveShapes() {
  let shapeEls = document.querySelectorAll(".svg-shape");
  var easings = ["easeInOutQuad", "easeInOutCirc", "easeInOutSine"];



  // Utility Function to set keyframes on the fly
  function createKeyframes(value) {
    var keyframes = [];
    for (var i = 0; i < 30; i++) keyframes.push({ value: value });
    return keyframes;
  }


  // function to move each shape, recalled as one finishes
  function animateShape(el) {

    var animation = anime.timeline({
      targets: el,
      direction: 'alternate',
      duration: function() { return anime.random(20000, 30000); },
      easing: function() { return easings[anime.random(0, easings.length - 1)]; },
      complete: function(anim) { animateShape(anim.animatables[0].target); },
    })
    .add({
      translateX: createKeyframes(function(el) { 
        return anime.random(-300, 300);
      }),
      translateY: createKeyframes(function(el) { 
        return anime.random(-100, 100);
      }),
      rotate: createKeyframes(function() { return anime.random(-180, 180); }),
    }, 0);

  }

  for (var i = 0; i < shapeEls.length; i++) {
      
  // Randomize Shape placement and start the animations
  shapeEls[i].style.top = anime.random(0, 99) + '%';
  shapeEls[i].style.left = anime.random(0, 99) + '%';
    animateShape(shapeEls[i]);
  }
}

export { MoveShapes };
