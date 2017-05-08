function Lemon(x, y) {
  
  this.x = x;
  this.y = y;
  this.w = 5;
  this.h = 5;
  this.age = 0;
  
  this.display = function (){
    noStroke();
    fill('#ebf442');
    ellipse(this.x, this.y, this.w, this.h);
    this.age = this.age+1;
  }
  
    this.mould = function (){
    this.y = this.y +1;
    this.w = this.w + 0.5;
    this.h = this.h + 0.5;
  }
}