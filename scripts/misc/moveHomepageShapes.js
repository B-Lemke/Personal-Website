function MoveShapes() {
  let shapeEls = document.querySelectorAll(".svg-shape");
  var easings = ["linear"];

  // Utility Function to set keyframes on the fly
  function createKeyframes(value) {
    var keyframes = [];
    for (var i = 0; i < 30; i++) keyframes.push({ value: value });
    return keyframes;
  }

  // function to move each shape, recalled as one finishes
  function animateShape(el) {
    var animation = anime
      .timeline({
        targets: el,
        direction: "alternate",
        duration: function () {
          return anime.random(20000, 30000);
        },
        easing: function () {
          return easings[anime.random(0, easings.length - 1)];
        },
        complete: function (anim) {
          animateShape(anim.animatables[0].target);
        },
      })
      .add(
        {
          translateX: createKeyframes(function (el) {
            return anime.random(-300, 300);
          }),
          translateY: createKeyframes(function (el) {
            return anime.random(-100, 100);
          }),
          rotate: createKeyframes(function () {
            return anime.random(-180, 180);
          }),
          scale: createKeyframes(function () {
            return anime.random(.5, 2);
          })
        },
        0
      );
  }

let lastX = 0;


  for (var i = 0; i < shapeEls.length; i++) {    
    // set random sizes
    let size = anime.random(100, 350) + "px";
    shapeEls[i].style.width = size;
    shapeEls[i].style.height = size;

    // Randomize Shape placement and start the animations
     // Top has a range between 10 and 95. That's 85 percentages, plus 15 to bring it to the range, even split this way
    shapeEls[i].style.top = ((85 / shapeEls.length) * i + 15) + '%'; //anime.random(10, 95) + "%";

    let newX = anime.random(-10, 90);
    while(-20 < newX - lastX && newX - lastX < 20 ) {
      console.log("Relooping", lastX, newX);
      newX = anime.random(-10, 90);
    }
    lastX = newX;
    shapeEls[i].style.left =  newX + "%";


    animateShape(shapeEls[i]);
  }
}

export { MoveShapes };
