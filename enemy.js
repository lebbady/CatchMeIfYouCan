'use strict';

function Enemy (canvasElement, initialPosition) {
  this.x = initialPosition.x;
  this.y = initialPosition.y;
  this.width = 15;
  this.height = 15;
  this.speed = 2.5;

  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');

  this.enemyImage = new Image();
  this.enemyImage.src = './images/alien.png';
}

Enemy.prototype.draw = function () {
  this.ctx.drawImage(this.enemyImage, this.x, this.y, this.width, this.height);
};

Enemy.prototype.update = function (player) {
  if (player.y === this.y && player.x >= this.x) {
    this.x += this.speed;
  } else if (player.y === this.y && player.x <= this.x) {
    this.x -= this.speed;
  } else if (player.x === this.x && player.y <= this.y) {
    this.y -= this.speed;
  } else if (player.x === this.x && player.y >= this.y) {
    this.y += this.speed;
  } else if (player.y <= this.y && player.x <= this.x) {
    this.x -= this.speed;
    this.y -= this.speed;
  } else if (player.y <= this.y && player.x >= this.x) {
    this.x += this.speed;
    this.y -= this.speed;
  } else if (player.x >= this.x && player.y >= this.y) {
    this.y += this.speed;
    this.x += this.speed;
  } else if (player.x <= this.x && player.y >= this.y) {
    this.y += this.speed;
    this.x -= this.speed;
  }
};
