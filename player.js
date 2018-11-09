'use strict';

function Player (canvasElement, initialPosition) {
  this.x = initialPosition.x;
  this.y = initialPosition.y;
  this.width = 20;
  this.height = 20;
  this.speed = 5;
  this.directionY = 0;
  this.directionX = 0;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');

  this.playerImage = new Image ();
  this.playerImage.src = './images/astronaut.png';
}

Player.prototype.draw = function (){
  //this.ctx.fillStyle = 'black';
  //this.ctx.fillRect(this.x,this.y,this.width,this.height);

  this.ctx.drawImage(this.playerImage,this.x,this.y, this.width, this.height);
  
}


Player.prototype.update = function () {

  if(this.x >= this.canvasElement.width - this.width){
    this.directionX = -Math.abs(this.directionX)
  }
  if(this.x <= 0 + this.width){
    this.directionX = Math.abs(this.directionX)
  }
  if(this.y >= this.canvasElement.height - this.height){
    this.directionY = -Math.abs(this.directionY)
  }
  if(this.y <= 0 + this.height){
    this.directionY = Math.abs(this.directionY)
  }
  this.x += this.speed * this.directionX;
  this.y += this.speed * this.directionY;
}

Player.prototype.setDirectionY = function (direction) {
  this.directionY = direction;
}

Player.prototype.setDirectionX = function (direction) {
  this.directionX = direction;
}

// Is this still being used?
Player.prototype.setDirection = function(direction) {
  this.direction = direction;
}

Player.prototype.collisionEnemy = function (enemy) {
  var collisionTop = this.y <= enemy.y + enemy.height;
  var collisionBottom = this.y + this.height >= enemy.y;
  var collisionLeft = this.x <= enemy.x + enemy.width;
  var collisionRight = this.x + this.width >= enemy.x;

  return collisionTop && collisionBottom && collisionLeft && collisionRight;
}

Player.prototype.collisionSafezone =  function (safezone) {
  var collisionTopSafe = this.y  <= safezone.y + (safezone.height);
  var collisionBottomSafe = this.y + (this.height) >= safezone.y;
  var collisionLeftSafe = this.x <= safezone.x + (safezone.width);
  var collisionRightSafe = this.x + (this.width) >= safezone.x;

  return collisionTopSafe && collisionBottomSafe && collisionLeftSafe && collisionRightSafe;
}