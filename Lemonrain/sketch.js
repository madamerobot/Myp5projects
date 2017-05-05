var lemon = [ ];

function setup() {
  createCanvas(500,500);
}

function draw() {
  
  background('#49ddd1');
  
    for (var i = lemon.length - 1; i >= 0; i--) {
    lemon[i].display();
      if(lemon[i].age > 5){
      lemon[i].mould();
      }
    }
}

function mousePressed(){
  
  var newlemon = new Lemon(mouseX, mouseY);
  lemon.push(newlemon);

}