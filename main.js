'use strict';

const buildDom = html => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
};

const main = () => {
  let splashMain = null;
  let startButton = null;
  let gameScreen = null;
  let gameOverScreen = null;
  let restartButton = null;
  let winScreen = null;

  // splash

  const buildSplash = () => {
    splashMain = buildDom(`
      <main class="buildSplash">
        <h1 class="title">Catch me if you can!</h1>
        <button class="start-button">Start</button>
        <p class="instructions">Instructions: Use the arrow keys to get to the Spaceship before getting caught by the alien. Be careful, the Spaceship likes playing tricks, so you will have to catch it three times in order to win!</p>
      </main>
    `);

    document.body.prepend(splashMain);
    startButton = document.querySelector('button');
    startButton.addEventListener('click', destroySplash);
  };

  const destroySplash = () => {
    splashMain.remove();
    startButton.removeEventListener('click', destroySplash);

    buildGameScreen();
  };

  // game

  const buildGameScreen = () => {
    document.body.style.cursor = 'none';
    gameScreen = buildDom(`
      <main class="game-screen">  
        <canvas class="canvas" width="1000px" height="500px"></canvas>
        <audio autoplay="autoplay"><source src='./sound/subatomic.mp3' type="audio/mpeg" /></audio>  
      </main>
    `);

    document.body.prepend(gameScreen);

    const canvasElement = document.querySelector('canvas');

    const game = new Game(canvasElement);
    game.start();
    game.onGameOverCallback(destroyGameScreen);
    game.onWinCallback(buildWinScreen);
  };

  const destroyGameScreen = () => {
    gameScreen.remove();
    buildGameOverScreen();
  };

  const buildGameOverScreen = () => {
    document.body.style.cursor = 'default';

    gameOverScreen = buildDom(`
      <main class="gameover-section">
        <h1 class="gameover-title">Game Over</h1>
        <div class="image-rip"><img class="image-rip-adjust" src='./images/deadastronaut.png' alt='ripimage'></div>
        <button class="restart-button-gameover">Restart</button>
      </main>  
    `);

    document.body.prepend(gameOverScreen);

    restartButton = document.querySelector('button');

    restartButton.addEventListener('click', destroyGameOverScreen);
  };

  const destroyGameOverScreen = () => {
    gameOverScreen.remove();
    restartButton.removeEventListener('click', destroyGameOverScreen);

    buildGameScreen();
  };

  const buildWinScreen = () => {
    document.body.style.cursor = 'default';

    winScreen = buildDom(`
      <main class="win-section">
        <div class="win-div"><img class="image-win" src='./images/winflag.svg' alt='ripimage'></div>
        <div class="message-button-win">
          <h1 class="congrats-message">Congratulations, you made it to the Spaceship!!</h1>
          <button class="restart-button-win">Restart</button>
        </div>
      </main>  
    `);

    gameScreen.remove();
    document.body.prepend(winScreen);

    restartButton = document.querySelector('button');

    restartButton.addEventListener('click', destroyWinScreen);
  };

  const destroyWinScreen = () => {
    winScreen.remove();
    restartButton.removeEventListener('click', destroyWinScreen);

    buildGameScreen();
  };

  buildSplash();
};

window.addEventListener('load', main);
