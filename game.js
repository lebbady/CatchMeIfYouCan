'use strict';

function Game(canvasElement) {

  this.player = null;
  this.enemies = [];
  this.canvasElement = canvasElement;
  this.gameIsOver = 0;
  this.initialPositionPlayer = {
    x: 20,
    y: this.canvasElement.height / 2
  }
  this.initialPositionEnemy = {
    x: 300,
    y: 120
  }
  this.positionSafezone = {
    x: 400,
    y: 120
  }
  this.width = 0;
  this.height = 0;
  this.color = 'black';
}

Game.prototype.start = function () {

  this.ctx = this.canvasElement.getContext('2d');

  this.startLoop();
  this.gameIsOver = 0;


}

Game.prototype.startLoop = function () {

  this.player = new Player(this.canvasElement, this.initialPositionPlayer);
  this.enemy = new Enemy(this.canvasElement, this.initialPositionEnemy);
  this.safezone = new Safezone(this.canvasElement, this.positionSafezone)

  this.handleKeyDown = function(event) {
    if (event.key === 'ArrowUp') {
      this.player.setDirectionY(-1);

    } else if (event.key === 'ArrowDown') {
      this.player.setDirectionY(1);

    } else if (event.key === 'ArrowRight') {
      this.player.setDirectionX(1);

    } else if (event.key === 'ArrowLeft') {
      this.player.setDirectionX(-1);

    }
  }.bind(this)

  this.changeToAttackMode = function(event) {
    if (event.key === 'a') {
      this.width = 8;
      this.height = 2;
      this.color = 'blue';
      setTimeout(this.backToNormalMode,3000);
    }
  }.bind(this)

  this.backToNormalMode = function(event) {
    this.width = 0;
    this.height = 0;
    this.color = 'black';
  }.bind(this)


  this.handleKeyUp = function(event) {
    this.player.setDirectionX(0);
    this.player.setDirectionY(0); 
  }.bind(this)

  
  document.addEventListener('keydown', this.handleKeyDown);
  document.addEventListener('keyup',this.handleKeyUp);
  document.addEventListener('keydown',this.changeToAttackMode);

  var loop = function() {

    this.checkCollisionAttackModeEnemy();
    this.checkCollisionPlayerSafezone();
    this.checkCollisionPlayerEnemy();
    this.updateAll();
    this.clearAll();
    this.drawAll();

    
    if (this.gameIsOver === 0) {
      requestAnimationFrame(loop);
    } else if (this.gameIsOver === 1) {
      this.finishGame();
    } else if (this.gameIsOver === 2) {
      this.winGame();
    } else if (this.gameIsOver === 3) {
      this.winGame();
    }
  
  }.bind(this);


  loop();
}

Game.prototype.drawAll = function() {
  this.player.draw(this.width,this.height,this.color);
  this.enemy.draw();
  this.safezone.draw();
}

Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
}

Game.prototype.updateAll = function() {
  this.player.update();
  this.enemy.update(this.player);
  this.safezone.update(this.player);
}

Game.prototype.onGameOverCallback = function (callback) {
  this.gameOverCallback = callback;
}

Game.prototype.finishGame = function () {
  this.gameOverCallback(); 
}

Game.prototype.checkCollisionPlayerEnemy = function () {
  if (this.player.collisionEnemy(this.enemy)) {
    this.gameIsOver = 1;
  }
}

Game.prototype.checkCollisionPlayerSafezone = function () {
  if (this.player.collisionSafezone(this.safezone)) {
    this.gameIsOver = 2;
  }
}

Game.prototype.checkCollisionAttackModeEnemy = function () {
  if (this.player.collisionAttackMode(this.enemy)) {
    this.gameIsOver = 3;
  }
}

Game.prototype.onWinCallback = function (callback) {
  this.winCallback = callback;
}

Game.prototype.winGame = function () {
  this.winCallback(); 
}


