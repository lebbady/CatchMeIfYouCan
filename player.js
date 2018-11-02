'use strict';

function Player (canvasElement, initialPosition) {
  this.x = initialPosition.x;
  this.y = initialPosition.y;
  this.width = 6;
  this.height = 6;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
}

Player.prototype.draw = function (){
  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(this.x,this.y,this.width,this.height);
  
}

// var player = new Player();
// player.draw();