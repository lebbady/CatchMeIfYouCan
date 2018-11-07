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
  //var gameScreen2;
  //var gameScreen3;
  var gameOverScreen;
  var restartButton;
  var winScreen;

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
        <canvas width="1000px" height="500px"></canvas>   
      </main>
    `);

    document.body.prepend(gameScreen);

    var canvasElement = document.querySelector('canvas');

    var game = new Game(canvasElement);
    game.start();
    game.onGameOverCallback(destroyGameScreen);
    //game.secondLevel(buildGameScreen2);
    game.onWinCallback(buildWinScreen);

 
  }

  /*
  function buildGameScreen2() {
    gameScreen2 = buildDom(`
      <main>  
        <canvas width="1000px" height="500px"></canvas>   
      </main>
    `);

    gameScreen.remove();
    document.body.prepend(gameScreen2);

    var canvasElement = document.querySelector('canvas');

    var game = new Game(canvasElement);
    game.start();
    game.onGameOverCallback(destroyGameScreen2);
    game.thirdLevel(buildGameScreen3);

 
  }

  function buildGameScreen3() {
    gameScreen3 = buildDom(`
      <main>  
        <canvas width="1200px" height="600px"></canvas>   
      </main>
    `);

    gameScreen2.remove();
    document.body.prepend(gameScreen3);

    var canvasElement = document.querySelector('canvas');

    var game = new Game(canvasElement);
    game.start();
    game.onGameOverCallback(destroyGameScreen);
    game.onWinCallback(buildWinScreen);
 
  }
*/
  function destroyGameScreen() {
    gameScreen.remove();
    buildGameOverScreen();
  }

  /*

  function destroyGameScreen2() {
    gameScreen2.remove();
    buildGameOverScreen();
  }

  function destroyGameScreen3() {
    gameScreen3.remove();
    buildGameOverScreen();
  }

  */

  function buildGameOverScreen() {
    gameOverScreen = buildDom(`
      <main>
        <h1>Game Over. You got yourself caught, loser...</h1>
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

  function buildWinScreen() {
    winScreen = buildDom(`
      <main>
        <h1>Congratulations, you made it to the Safezone!!</h1>
        <button>Restart</button>
      </main>  
    `);

    gameScreen.remove();
    document.body.prepend(winScreen);

    restartButton = document.querySelector('button');

    restartButton.addEventListener('click', destroyWinScreen);
  }

  function destroyWinScreen() {
    
    winScreen.remove();
    restartButton.removeEventListener('click', destroyWinScreen);

    buildGameScreen();
  }
  
  

  buildSplash();

}

window.addEventListener('load', main);