'use strict';

function Game(canvasElement) {

  this.player = null;
  this.enemies = [];
  this.canvasElement = canvasElement;
  this.gameIsOver = false;
}

Game.prototype.start = function () {

  this.ctx = this.canvasElement.getContext('2d');

  this.startLoop()
  this.gameIsOver = false;

  setTimeout(function () {
    this.gameIsOver = true;
    this.finishGame();
  }.bind(this),2000);

}

Game.prototype.startLoop = function () {

  var loop = function() {

    console.log('asd');
    /*
    this.updateAll();
    this.clearAll();
    this.drawAll();
    */

  
    if (!this.gameIsOver) {
      requestAnimationFrame(loop);
    }
  
  }.bind(this);


  loop();
}

Game.prototype.onGameOverCallback = function (callback) {
  this.gameOverCallback = callback;
}

Game.prototype.finishGame = function () {
  this.gameOverCallback(); 
}



function updateAll(){}
function clearAll(){}
function drawAll(){}


