function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.scl=[];

  this.eat = function(pos){
    var d = dist(this.x,this.y, pos.x,pos.y);
    if (d<1){
      this.total++;
      return true;
    }else{
      return false;
    }
  }

  this.dir = function(x,y){
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function(){
    for(var i=0;i<this.scl.length;i++){
      var pos = this.scl[i];
      var d = dist(this.x,this.y,pos.x,pos.y);
      if (d<1){
        console.log('starting over');
        this.total=0;
        this.scl = [];
      }
    }
  }

  this.update = function(){
    if(this.total === this.scl.length){
    for(var i=0; i<this.scl.length-1; i++){
      this.scl[i]=this.scl[i+1];
    }
  }
    this.scl[this.total-1]=createVector(this.x,this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x,0,width-scl);
    this.y = constrain(this.y,0,width-scl);
  }
  this.show = function(){
    for(var i=0; i<this.scl.length; i++){
      image(img,this.scl[i].x, this.scl[i].y, scl, scl);
    }
    image(img,this.x, this.y, scl, scl);
  }
}
