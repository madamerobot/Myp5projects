var mic;
var base = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //Setting up mic
  mic = new p5.AudioIn();
  mic.start();
  
  rectMode(CENTER);

}

function draw() {
  background('#42f4b0');

  //Mic control features
  var vol = mic.getLevel();
  var r = vol*7500;
  console.log(r);
  
  //Appearance beams
  fill('#ea93d5');
  noStroke();
  rect(width*0.3, height/2, 50, r*0.5);
  rect(width*0.4, height/2, 50, r*0.75);
  rect(width*0.5, height/2, 50, r);
  rect(width*0.6, height/2, 50, r*0.75);
  rect(width*0.7, height/2, 50, r*0.5);
  
  //party effect on background, if volume bigger than windowheight, background = random
  if (r > height){
  background(random(255),random(255),random(255));
  }

}