'use strict';

function Game(canvasElement) {

  this.player = null;
  this.enemies = [];
  this.canvasElement = canvasElement;
}

Game.prototype.start = function () {

  this.ctx = this.canvasElement.getContext('2d');

}