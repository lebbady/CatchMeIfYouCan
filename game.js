'use strict';

class Game {
  constructor (canvasElement) {
    this.player = null;
    this.safezones = [];
    this.canvasElement = canvasElement;
    this.gameIsOver = 0;
    this.initialPositionPlayer = {
      x: 20,
      y: this.canvasElement.height / 2
    };
    this.initialPositionEnemy = {
      x: 300,
      y: 120
    };
    this.positionSafezone = {
      x: this.canvasElement.width - 100,
      y: this.canvasElement.height / 2
    };
    this.safezoneSize = {
      width: 50,
      height: 50
    };
    this.safezoneSpeed = 2;

    this.xChasing = 0;
    this.yChasing = 0;
    this.level = 1;

    this.movementsArray = [];
  }

  start () {
    this.ctx = this.canvasElement.getContext('2d');
    this.startLoop();
    this.gameIsOver = 0;

    const randomSafezoneMovement = () => {
      this.safezones[0].xChasing = Math.round(Math.random() * this.canvasElement.width);
      this.safezones[0].yChasing = Math.round(Math.random() * this.canvasElement.height);
    };

    const setIntervalId = setInterval(randomSafezoneMovement, 1000);
  };

  startLoop () {
    this.player = new Player(this.canvasElement, this.initialPositionPlayer);
    this.enemy = new Enemy(this.canvasElement, this.initialPositionEnemy);
    this.safezones.push(new Safezone(this.canvasElement, this.positionSafezone, this.safezoneSize, this.safezoneSpeed, this.yChasing, this.xChasing));

    this.handleKeyDown = (event) => {
      if (!this.movementsArray.includes(event.key)) {
        this.movementsArray.push(event.key);
      }

      this.movementsArray.forEach((movement) => {
        if (movement === 'ArrowUp') {
          this.player.setDirectionY(-1);
        }

        if (movement === 'ArrowDown') {
          this.player.setDirectionY(1);
        }

        if (movement === 'ArrowRight') {
          this.player.setDirectionX(1);
        }

        if (movement === 'ArrowLeft') {
          this.player.setDirectionX(-1);
        }
      });
    };

    this.handleKeyUp = (event) => {
      const indexOfKey = this.movementsArray.indexOf(event.key);
      this.movementsArray.splice(indexOfKey, 1);

      if (event.key === 'ArrowUp') {
        this.player.setDirectionY(0);
      }
      if (event.key === 'ArrowDown') {
        this.player.setDirectionY(0);
      }
      if (event.key === 'ArrowRight') {
        this.player.setDirectionX(0);
      }
      if (event.key === 'ArrowLeft') {
        this.player.setDirectionX(0);
      }
    };

    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);

    const loop = () => {
      this.checkCollisionPlayerSafezone();
      this.checkCollisionPlayerEnemy();
      this.updateAll();
      this.clearAll();
      this.drawAll();

      if (this.gameIsOver === 0) {
        window.requestAnimationFrame(loop);
      } else if (this.gameIsOver === 1) {
        this.finishGame();
      } else if (this.gameIsOver === 2) {
        this.winGame();
      }
    };

    loop();
  };

  drawAll () {
    this.player.draw(this.width, this.height, this.color);
    this.enemy.draw();

    this.safezones[0].draw();
  };

  clearAll () {
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  };

  updateAll () {
    this.player.update();
    this.enemy.update(this.player);
    this.safezones[0].update(this.level);
  };

  onGameOverCallback (callback) {
    this.gameOverCallback = callback;
  };

  finishGame () {
    this.gameOverCallback();
  };

  checkCollisionPlayerEnemy () {
    if (this.player.collisionEnemy(this.enemy)) {
      this.gameIsOver = 1;
    }
  };

  checkCollisionPlayerSafezone () {
    if (this.player.collisionSafezone(this.safezones[0])) {
      this.level++;
      this.enemy.speed += 0.5;
      if (this.level > 3) {
        this.gameIsOver = 2;
      } else {
        this.safezones.pop();
        this.newSafezone();
      }
    }
  };

  onWinCallback (callback) {
    this.winCallback = callback;
  };

  winGame () {
    this.winCallback();
  };

  newSafezone () {
    if (this.level === 2) {
      this.positionSafezone = {
        x: 0,
        y: 0
      };
      this.safezoneSize = {
        width: 35,
        height: 35
      };
      this.safezoneSpeed = 10;
      this.safezones.push(new Safezone(this.canvasElement, this.positionSafezone, this.safezoneSize, this.safezoneSpeed, this.yChasing, this.xChasing));
    }
    if (this.level === 3) {
      this.positionSafezone = {
        x: 400,
        y: 400
      };
      this.safezoneSize = {
        width: 20,
        height: 20
      };
      this.safezoneSpeed = 3;
      this.safezones.push(new Safezone(this.canvasElement, this.positionSafezone, this.safezoneSize, this.safezoneSpeed, this.yChasing, this.xChasing));
    }
  };
}
