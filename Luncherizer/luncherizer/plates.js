function Plates(x,y,col,r) {
   
   this.x = x;
   this.y = y;
   this.col = color('#42f4b6');
   this.r = 120;
   
   this.xdir = 1;
   
   this.display = function() {
     
     noStroke();
     fill(this.col);
     ellipseMode('RADIUS');
     ellipse(this.x+110, this.y, this.r, this.r);
   }
   
  /* this.move = function() {
     this.x = this.x + this.xdir;
   }*/
   
  
}