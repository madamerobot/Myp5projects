//var x, y;

function setup() {
  createCanvas (windowWidth, windowHeight);
 // x = 0;
  //y = 0;
  frameRate (10);
}

function draw() {
  
  noFill ();
  strokeWeight (3);
  ellipse (windowWidth/2, windowHeight/2, random(width), windowHeight);
  stroke (155, 13, 255, 40);
 // x += 2;
 //y += 3;
  
}