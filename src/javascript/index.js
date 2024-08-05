import EnemyController from "./EnemyController.js";
import BulletController from "./BulletController.js";
import Player from "./Player.js";

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const instructions = document.getElementById("instructions");
const LogosContainer = document.getElementById("logosContainer");
const gameOverScreen = document.getElementById("gameOverScreen");
const winScreen = document.getElementById("winScreen");
const title = document.getElementById("title");
const scoreDisplay = document.getElementById("scoreDisplay");
const playButton = document.getElementById("playButton");
const gameOverScreenButton = document.getElementById("gameOverScreenButton");
const retryButton = document.getElementById("retryButton");
const restartButton = document.getElementById("restartButton");
const winScreenButton = document.getElementById("winScreenButton");
const footer = document.getElementById("footer");

gameOverScreen.style.display = 'none';
winScreen.style.display = 'none';
scoreDisplay.style.display = 'none';

canvas.width = 1024;
canvas.height = 600;

const background = new Image();
background.src = "./src/assets/images/space.png";

const enemyBulletController = new BulletController(canvas, 4, "red", true);
const playerBulletController = new BulletController(canvas, 10, "white", true);

const enemyController = new EnemyController(
  canvas,
  enemyBulletController,
  playerBulletController
);

const player = new Player(canvas, 10, playerBulletController);

let isGameOver = false;
let didWin = false;

function game() {
  canvas.style.display = "none";
  gameOverScreen.style.display = "none";
  winScreen.style.display = "none";
  title.style.display = "none";
  scoreDisplay.style.display = "none";
  checkGameOver();
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  if(!isGameOver) {
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
  } else {
    displayGameOver();
  }
}
function displayGameOver() {
  if(isGameOver) {
    canvas.style.display = "none";
    title.style.display = "none";
    scoreDisplay.style.display = "none";

    if(didWin) {
      winScreen.style.display = "flex";
      winScreenButton.style.display = `Pontuação: ${playerScore}`;
    } else {
      gameOverScreen.style.display = "flex";
      gameOverScreenButton.style.display = `Pontuação: ${playerScore}`;
    }
  }
}

// Funções para controlar as setas do teclado

function checkGameOver() {
  if(isGameOver) {
    return;
  }

  if(enemyBulletController.collideWith(player) || enemyBulletController.collideWith(player)) {
    isGameOver = true;
  }

  if(enemyController.collideWith(player)) {
    isGameOver = true;
  }

  if(enemyController.enemyRows.length === 0) {
    didWin = true;
    isGameOver = true;
  }
}

function displayGameOver() {
  if(isGameOver) {
    let text = didWin ? "Você Ganhou!" : "Game Over";
    let textOffset = didWin ? 5 : 3.6;
    ctx.fillStyle = "white";
    ctx.font = "35px 'Press Start 2P'";
    ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
  }
}

// Função para iniciar o jogo
function startGame() {
  instructions.style.display = "none";
  LogosContainer.style.display = "none";
  footer.style.display = "none";
  winScreen.style.display = "none";
  gameOverScreen.style.display = "none";

  title.style.display = "flex";
  scoreDisplay.style.display = "flex";

  canvas.style.display = "block";
  scoreDisplay.style.display = "flex";

  canva.style.display = "block";
  initGame();
  gameInterval = setInterval(game, 1000 / 60);
}

function restartGame() {
  gameOverScreen.style.display = "none";
  winScreen.style.display = "none";
  title.style.display = "none";
  canvas.style.display = "none";
  scoreDisplay.style.display = "none";

  instructions.style.display = "flex";
  LogosContainer.style.display = "flex";
  footer.style.display = "flex";
}

playButton.addEventListener("click", startGame);
retryButton.addEventListener("click", restarGame);
restartButton.addEventListener("click", restarGame);

initGame();
