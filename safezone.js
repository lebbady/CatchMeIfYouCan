'use strict';

class Safezone {
  constructor (canvasElement, position, size, safeSpeed, x, y) {
    this.x = position.x;
    this.y = position.y;
    this.width = size.width;
    this.height = size.height;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');
    this.safezoneSpeed = safeSpeed;
    this.xChasing = x;
    this.yChasing = y;
    this.safezoneDirectionY = -1;
    this.chasingWidth = 0;
    this.chasingHeight = 0;

    this.safezoneImage = new Image();
    this.safezoneImage.src = './images/spaceship1.png';
  }

  draw () {
    // this.ctx.fillStyle = 'green';
    // this.ctx.fillRect(this.x,this.y,this.width,this.height);
    this.ctx.drawImage(this.safezoneImage, this.x, this.y, this.width, this.height);
  };

  randomChasing () {
    this.ctx.fillRect(this.xChasing, this.yChasing, this.chasingWidth, this.chasingHeight);
  };

  update (level) {
    if (level === 2) {
      if (this.y > this.canvasElement.height - this.height) {
        this.safezoneDirectionY = -1;
      }
      if (this.y <= 0) {
        this.safezoneDirectionY = 1;
      }
      this.y += this.safezoneSpeed * this.safezoneDirectionY;
    }
    if (level === 3) {
      if (this.yChasing === this.y && this.xChasing >= this.x) {
        this.x += this.safezoneSpeed;
      } else if (this.yChasing === this.y && this.xChasing <= this.x) {
        this.x -= this.safezoneSpeed;
      } else if (this.xChasing === this.x && this.yChasing <= this.y) {
        this.y -= this.safezoneSpeed;
      } else if (this.xChasing === this.x && this.yChasing >= this.y) {
        this.y += this.safezoneSpeed;
      } else if (this.yChasing <= this.y && this.xChasing <= this.x) {
        this.x -= this.safezoneSpeed;
        this.y -= this.safezoneSpeed;
      } else if (this.yChasing <= this.y && this.xChasing >= this.x) {
        this.x += this.safezoneSpeed;
        this.y -= this.safezoneSpeed;
      } else if (this.xChasing >= this.x && this.yChasing >= this.y) {
        this.y += this.safezoneSpeed;
        this.x += this.safezoneSpeed;
      } else if (this.xChasing <= this.x && this.yChasing >= this.y) {
        this.y += this.safezoneSpeed;
        this.x -= this.safezoneSpeed;
      }
    }
  };
}
