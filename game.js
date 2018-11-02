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


}

Game.prototype.startLoop = function () {

  this.player = new Player(this.canvasElement, this.initialPositionPlayer);

  this.handleKeyDown = function(event) {
    if (event.key === 'ArrowUp') {
      this.player.setDirection(-1);
      this.player.moveVertical();

    } else if (event.key === 'ArrowDown') {
      this.player.setDirection(1);
      this.player.moveVertical();

    } else if (event.key === 'ArrowRight') {
      this.player.setDirection(1);
      this.player.moveHorizontal();

    } else if (event.key === 'ArrowLeft') {
      this.player.setDirection(-1);
      this.player.moveHorizontal();

    }
  }.bind(this)

  this.handleKeyUp = function(event) {
    this.player.setDirection(0);
  }
  
  document.addEventListener('keyup', this.handleKeyDown);
  document.addEventListener('keyup',this.handleKeyDown);


  var loop = function() {

    this.updateAll();
    this.clearAll();
    this.drawAll();

    
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



