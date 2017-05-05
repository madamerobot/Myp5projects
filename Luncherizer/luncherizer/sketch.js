var toppings = [];
var toppingimg = [];
var drops = [];
var popup = [];
var plates = [];
var counter = 0;
var bg;
var font;

function preload() {

  font = loadFont('fonts/ka1.ttf');

  for (var i = 0; i < 3; i++) {
    toppingimg[i] = loadImage('images/topping' + i + '.png')
  }
  bg = loadImage('images/background.png');
}

function setup() {
  createCanvas(640, 480);

  for (var k = 0; k < 1; k++) {
    popup[k] = new Popup();
  }

  for (var i = 0; i < 1000; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(bg);
  print(counter);
  
  for (var o = 0; o < plates.length; o++) {
    plates[o].display();
    //plates[o].move();
  }

  for (var i = toppings.length - 1; i >= 0; i--) {
    toppings[i].display();
  }

  for (var j = drops.length - 1; j >= 0; j--) {
    if (counter > 5) {
      drops[j].fall();
      drops[j].show();
    }
  }

  for (var k = 0; k < popup.length; k++) {
    if (counter > 5) {
      popup[k].display();
    }
  }
}

function mousePressed() {

  var r = floor(random(0, toppingimg.length));
  var b = new Toppingsimg(mouseX, mouseY, toppingimg[r]);
  toppings.push(b);
  counter = counter + 1;
}