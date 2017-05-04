function Toppingsimg(x, y, img){
  this.x = x;
  this.y = y;
  this.img = img;
  
  this.display = function() {
  var size = 100;
  image(this.img, this.x - size/2, this.y - size/2, size, size); 
  }
}