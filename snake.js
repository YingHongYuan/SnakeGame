



function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  this.dir = function(x,y){
    this.xspeed = x;
    this.yspeed = y;
  }

  this.update = function(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  this.show = function(){
    image(img,this.x, this.y, 200 , 180);
  }
}
