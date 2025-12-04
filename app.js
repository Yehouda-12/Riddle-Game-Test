import readlineSync from "readline-sync";
import { createplayer, addSolveTime, showStats } from "./utils/player.js";
import { askRiddle, measureSolveTime,filterRiddlesByDifficulty } from "./utils/riddle_utils.js";
import allRiddle from "./riddles/index.js";
let allRiddle1 = allRiddle

console.log("Welcome to the Riddle Game!");
let playerName = readlineSync.question("Please enter your name: ");
let player = createplayer(playerName);
let chosenDifficulty = readlineSync.question("Choose a difficulty level (EASY, MEDIUM, HARD) It is necessary to write in uppercase: ");
allRiddle1 = filterRiddlesByDifficulty(allRiddle1, chosenDifficulty);

for (let i = 0; i < allRiddle1.length; i++) {
  let riddle = allRiddle1[i];
  let duration = measureSolveTime(() => askRiddle(riddle));
  addSolveTime(player, duration);
  
}
showStats(player);
