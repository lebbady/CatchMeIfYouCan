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

Player.prototype.setDirection = function(direction) {
  this.direction = direction;
}

Player.prototype.collisionEnemy = function (enemy) {
  var collisionTop = this.y - (this.height / 2) <= enemy.y + (enemy.height / 2);
  var collisionBottom = this.y + (this.height / 2) >= enemy.y - (enemy.height / 2);
  var collisionLeft = this.x - (this.width / 2) <= enemy.x + (enemy.width / 2);
  var collisionRight = this.x + (this.width / 2) >= enemy.x - (enemy.width / 2);

  return collisionTop && collisionBottom && collisionLeft && collisionRight;
}