'use strict';

function Player (canvasElement, initialPosition) {
  this.x = initialPosition.x;
  this.y = initialPosition.y;
  this.width = 6;
  this.height = 6;
  this.speed = 5;
  this.directionY = 0;
  this.directionX = 0;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
}

Player.prototype.draw = function (){
  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(this.x,this.y,this.width,this.height);
  
}

Player.prototype.update = function () {
  this.x += this.speed * this.directionX;
  this.y += this.speed * this.directionY;
}

Player.prototype.setDirectionY = function (direction) {
  this.directionY = direction;
}

Player.prototype.setDirectionX = function (direction) {
  this.directionX = direction;
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