
function setup() {
  createCanvas (windowWidth, windowHeight);
  frameRate (10);
}

function draw() {
  
  noFill ();
  stroke (155, 13, 255, 40);
  strokeWeight (3);
  ellipse (windowWidth/2, windowHeight/2, random(windowWidth/4), (height/2));
  
}