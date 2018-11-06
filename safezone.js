'use strict';

function Safezone (canvasElement, position, x, y) {
  this.x = position.x;
  this.y = position.y;
  this.width = 5;
  this.height = 5;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
  this.safezoneSpeed = 1;
  this.xChasing = x;
  this.yChasing = y;
  this.chasingWidth = 0;
  this.chasingHeight = 0;
  this.freeSafezone = true;
  
}

Safezone.prototype.draw = function() {
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(this.x,this.y,this.width,this.height);
}

Safezone.prototype.randomChasing = function () {
  this.ctx.fillRect(this.xChasing, this.yChasing, this.chasingWidth, this.chasingHeight);
}

Safezone.prototype.xRandom = function () {
  
}

Safezone.prototype.yRandom = function () {
  return 
}



Safezone.prototype.update = function() {
  /*
  if (level === 1) {
    this.x = this.x;
    this.y = this.y;
  }
  if (level === 2) {
    if(this.y === this.canvasElement.height - this.height) {
      this.safezoneDirectionY = -1;
    }
    if(this.y <= 0){
      this.safezoneDirectionY = 1;
    }
    this.y += this.safezoneSpeed * this.safezoneDirectionY;
  }
  if (level === 3) {
    */
    
    //console.log(this.yChasing);
    
    if (this.yChasing === this.y && this.xChasing >= this.x){
      this.x += this.safezoneSpeed;
    } else if (this.yChasing === this.y && this.xChasing <= this.x){
      this.x -= this.safezoneSpeed;
    } else if (this.xChasing === this.x && this.yChasing <= this.y){
      this.y -= this.safezoneSpeed;
    } else if (this.xChasing === this.x && this.yChasing >= this.y){
      this.y += this.safezoneSpeed;
    } else if (this.yChasing <= this.y && this.xChasing <= this.x){
      this.x -= this.safezoneSpeed;
      this.y -= this.safezoneSpeed;
    } else if (this.yChasing <= this.y && this.xChasing >= this.x){
      this.x += this.safezoneSpeed;
      this.y -= this.safezoneSpeed;
    }else if (this.xChasing >= this.x && this.yChasing >= this.y){
      this.y += this.safezoneSpeed;
      this.x += this.safezoneSpeed;
    }else if (this.xChasing <= this.x && this.yChasing >= this.y){
      this.y += this.safezoneSpeed;
      this.x -= this.safezoneSpeed;
    }
    
    

  //}

}


