import EnemyController from "./EnemyController.js";
import BulletContoller from "./BulletContoller.js";
import Player from "./Player.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "src/assets/images/space.png";