'use strict';

function Player (canvasElement, initialPosition) {
  this.x = initialPosition.x;
  this.y = initialPosition.y;
  this.width = 6;
  this.height = 6;
  this.speed = 5;
  this.direction = 0;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
}

Player.prototype.draw = function (){
  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(this.x,this.y,this.width,this.height);
  
}

Player.prototype.update = function () {
     
  
}

Player.prototype.moveHorizontal = function() {
  this.x += this.speed * this.direction; 
}

Player.prototype.moveVertical = function() {
  this.y += this.speed * this.direction;
}

Player.prototype.setDirection = function(direction) {
  this.direction = direction;
}