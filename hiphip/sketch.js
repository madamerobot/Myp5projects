function setup() {
  
  createCanvas (1400, 425);
  frameRate (15);
}

function draw() {
 
  triangle (mouseX, mouseY, mouseX-22, mouseY-35, mouseX+26, mouseY);
  noStroke ();
  fill (random (255), random (255), random (255));
  
  
}