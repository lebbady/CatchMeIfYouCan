# Catch Me If You Can


## Description
In this game, a player will try to escape from an enemy that will automatically go after him. The player will win after reaching a predetermined "safe zone", but if the enemy catches the player before that, it is game over.


## MVP (DOM - CANVAS)
Canvas. The MVP version will be the first level of this game: just one enemy and a clearly defined safe zone.


## Backlog

- The player can attack the enemy.
- If the player can attack, there is no safe zone.
- The game has just one level, that increases the difficulty with each wave of enemies.
- The attack method of the player is a close-range one.
- The game is cleared once the player kills all the enemies.
- The player has more than 1hp.
- The enemies vary their hp, depending on their type.
- Music.


## Data structure

main.js

- buildSplash();
- destroySplash();
- buildGameScreen();
- destroyGameScreen();
- buildGameOverScreen();
- destroyGameOverScreen();
- buildCongratsScreen();
- destroyCongratsScreen();

game.js

- start();
  - buildDOM;
  - this.canvas;
  - this.ctx;
  - start loop;
- updateAll();
- drawAll();
- finishGame();
- gameOverCallback();
- checkCollisionWithEnemy();
- checkCollisionWithSafezone();
- this.player;
- this.enemy = [];
- this.safezone;

player.js

- x
- y
- size
- updatePlayer();
- drawPlayer();
- checkCollisionWithEnemy();
- checkCollisionWithSafezone();

enemy.js

- x
- y
- size
- updateEnemy();
- drawEnemy();


safezone.js

- x
- y
- size



## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen()
  - destroyGameOver(if)
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - destroySplash()
  - destroyGameOver()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - destroyGame()
  - buildGameOver()
  - addEventListener( if splashScreen, else starGame) 

## Task

create files javascript

- Main - buildDom
- Main - buildSplash
- Main - addEventListener
- Main - destroySplash
- Game - buildDom
- Main - GameOver
- Main - destroy Game
- Main - GameOver RESTART
- Main - removeGameOver
- Game - addEventListener
- Game - create player
- Player - create
- Player - directions-move
- Game - player and enemies position
- Game - clear
- Game - create enemies
- Enemy - create
- Enemy - check if still in screen
- Enemy - follow player
- Game - collision + remove
- Game - gameOver


## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
