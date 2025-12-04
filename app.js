
import readlineSync from "readline-sync";
import { createplayer, addSolveTime, showStats } from "./utils/player.js";
import { askRiddle, measureSolveTime } from "./utils/riddle_utils.js";
import allRiddle from "./riddles/index.js";
console.log("Welcome to the Riddle Game!");
let playerName = readlineSync.question("Please enter your name: ");
let player = createplayer(playerName);
for (let i = 0; i < allRiddle.length; i++) {
  let riddle = allRiddle[i];
  let duration = measureSolveTime(() => askRiddle(riddle));
  addSolveTime(player, duration);
  
}
showStats(player);
