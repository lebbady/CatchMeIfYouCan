'use strict';

function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {

  var splashMain;
  var startButton;
  var gameScreen;
  var gameOverScreen;
  var restartButton;

  // splash

  function buildSplash() {
    
    splashMain = buildDom(`
      <main>
        <h1>Catch me if you can!</h1>
        <button>Start</button>
      </main>
    `);

    document.body.prepend(splashMain);
    startButton = document.querySelector('button');
    startButton.addEventListener('click', destroySplash);
  }

  function destroySplash() {
    splashMain.remove();
    startButton.removeEventListener('click', destroySplash);

    buildGameScreen();
  }

  //game

  function buildGameScreen() {
    gameScreen = buildDom(`
      <main>  
        <canvas width="500px" height="250px"></canvas>   
      </main>
    `);

    document.body.prepend(gameScreen);

    var canvasElement = document.querySelector('canvas');

    var game = new Game(canvasElement);
    game.start();
    game.onGameOverCallback(destroyGameScreen);

 
  }

  function destroyGameScreen() {
    gameScreen.remove();
    buildGameOverScreen();
  }

  function buildGameOverScreen() {
    gameOverScreen = buildDom(`
      <main>
        <h1>Game Over</h1>
        <button>Restart</button>
      </main>  
    `);


    document.body.prepend(gameOverScreen);

    restartButton = document.querySelector('button');

    restartButton.addEventListener('click', destroyGameOverScreen);

  }

  function destroyGameOverScreen() {
    
    gameOverScreen.remove();
    restartButton.removeEventListener('click', destroyGameOverScreen)

    buildGameScreen();
  }
  
  

  buildSplash();

}

window.addEventListener('load', main);