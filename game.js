'use strict';

function Game(canvasElement) {

  this.player = null;
  this.enemies = [];
  this.canvasElement = canvasElement;
  this.gameIsOver = false;
  this.initialPositionPlayer = {
    x: 20,
    y: this.canvasElement.height / 2
  }
}

Game.prototype.start = function () {

  this.ctx = this.canvasElement.getContext('2d');

  this.startLoop();
  this.gameIsOver = false;

  setTimeout(function () {
    this.gameIsOver = true;
    this.finishGame();
  }.bind(this),2000);

}

Game.prototype.startLoop = function () {

  this.player = new Player(this.canvasElement, this.initialPositionPlayer);



  var loop = function() {

    this.drawAll();
    //this.clearAll();
    //this.updateAll();  

  
    if (!this.gameIsOver) {
      requestAnimationFrame(loop);
    }
  
  }.bind(this);


  loop();
}

Game.prototype.drawAll = function() {
  this.player.draw();
}

Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
}

Game.prototype.updateAll = function() {
  this.player.update();
}

Game.prototype.onGameOverCallback = function (callback) {
  this.gameOverCallback = callback;
}

Game.prototype.finishGame = function () {
  this.gameOverCallback(); 
}



