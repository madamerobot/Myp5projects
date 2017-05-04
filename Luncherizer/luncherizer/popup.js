function Popup() {
  
  this.x = width/2;
  this.y = height/2;
  
  this.display = function() {
    fill(255);
    textSize(50);
    textFont(font);
    textAlign(CENTER);
    text('HAGELSLAG', this.x, this.y);
  }
}