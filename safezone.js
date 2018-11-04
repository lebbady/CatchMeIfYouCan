'use strict';

function Safezone (canvasElement, position) {
  this.x = position.x;
  this.y = position.y;
  this.width = 40;
  this.height = 40;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
}

Safezone.prototype.draw = function() {
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(this.x,this.y,this.width,this.height);
}


Safezone.prototype.update = function() {
  this.x = this.x;
  this.y = this.y;
}


