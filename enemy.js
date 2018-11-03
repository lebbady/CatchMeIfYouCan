'use strict';

function Enemy (canvasElement, initialPosition) {
  this.x = initialPosition.x;
  this.y = initialPosition.y;
  this.width = 6;
  this.height = 6;
  this.speed = 5;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
}

Enemy.prototype.draw = function (){
  this.ctx.fillStyle = 'red';
  this.ctx.fillRect(this.x,this.y,this.width,this.height);
  
}

Enemy.prototype.update = function (player) {
  if (player.y === this.y && player.x >= this.x){
    this.x += 2;
  } else if (player.y === this.y && player.x <= this.x){
    this.x -= 2;
  } else if (player.x === this.x && player.y <= this.y){
    this.y -= 2;
  } else if (player.x === this.x && player.y >= this.y){
    this.y += 2;
  } else if (player.y <= this.y && player.x <= this.x){
    this.x -= 2;
    this.y -= 2;
  } else if (player.y <= this.y && player.x >= this.x){
    this.x += 2;
    this.y -= 2;
  }else if (player.x >= this.x && player.y >= this.y){
    this.y += 2;
    this.x += 2;
  }else if (player.x <= this.x && player.y >= this.y){
    this.y += 2;
    this.x -= 2;
  }

}