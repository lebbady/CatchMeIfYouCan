'use strict';

class Player {
  constructor (canvasElement, initialPosition) {
    this.x = initialPosition.x;
    this.y = initialPosition.y;
    this.width = 20;
    this.height = 20;
    this.speed = 5;
    this.directionY = 0;
    this.directionX = 0;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');

    this.playerImage = new Image();
    this.playerImage.src = './images/astronaut.png';
  }

  draw () {
    // this.ctx.fillStyle = 'black';
    // this.ctx.fillRect(this.x,this.y,this.width,this.height);

    this.ctx.drawImage(this.playerImage, this.x, this.y, this.width, this.height);
  };

  update () {
    if (this.x >= this.canvasElement.width - this.width) {
      this.directionX = -Math.abs(this.directionX);
    }
    if (this.x <= 0) {
      this.directionX = Math.abs(this.directionX);
    }
    if (this.y >= this.canvasElement.height - this.height) {
      this.directionY = -Math.abs(this.directionY);
    }
    if (this.y <= 0) {
      this.directionY = Math.abs(this.directionY);
    }
    this.x += this.speed * this.directionX;
    this.y += this.speed * this.directionY;
  };

  setDirectionY (direction) {
    this.directionY = direction;
  };

  setDirectionX (direction) {
    this.directionX = direction;
  };

  setDirection (direction) {
    this.direction = direction;
  };

  collisionEnemy (enemy) {
    const collisionTop = this.y <= enemy.y + enemy.height;
    const collisionBottom = this.y + this.height >= enemy.y;
    const collisionLeft = this.x <= enemy.x + enemy.width;
    const collisionRight = this.x + this.width >= enemy.x;

    return collisionTop && collisionBottom && collisionLeft && collisionRight;
  };

  collisionSafezone (safezone) {
    const collisionTopSafe = this.y <= safezone.y + (safezone.height);
    const collisionBottomSafe = this.y + (this.height) >= safezone.y;
    const collisionLeftSafe = this.x <= safezone.x + (safezone.width);
    const collisionRightSafe = this.x + (this.width) >= safezone.x;

    return collisionTopSafe && collisionBottomSafe && collisionLeftSafe && collisionRightSafe;
  };
}
