var drops = [];
var img;

function preload (){
  img = loadImage('images/bg.png');
}

function setup() {
  createCanvas(640, 480);
  for (var i = 0; i < 300; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(img);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}