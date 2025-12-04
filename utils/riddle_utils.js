import readlineSync from "readline-sync";

export function askRiddle(riddleObj) {
  console.log(`Name : ${riddleObj.name}`);
  console.log(`Description : ${riddleObj.taskDescription}`);
  if (riddleObj.choices) {
    console.log("Choices :");
    for (let i = 0; i < riddleObj.choices.length; i++) {
      console.log(`${i} : ${riddleObj.choices[i]}`);
    }
    let answer = readlineSync.question("Your answer (choose the number): ");
    while (answer !== riddleObj.correctAnswer) {
      console.log("Incorrect answer! Try again.");
      answer = readlineSync.question("Your answer (choose the number): ");
    }
    console.log("Correct answer!");
  } else {
    let answer = readlineSync.question("Your answer: ");
    while (answer !== riddleObj.correctAnswer) {
      console.log("Incorrect answer! Try again.");
      answer = readlineSync.question("Your answer (choose the number): ");
    }
    console.log("Correct answer!");
  }
}

export function measureSolveTime(fn){
    let start = Date.now();
    
    fn()
    let end = Date.now();
    let difference = (end - start) /1000;
    return difference;
  
}

export function filterRiddlesByDifficulty(riddles, difficulty) {
    const difficultyLevels = { "EASY": 1, "MEDIUM": 2, "HARD": 3 };
    let maxLevel = difficultyLevels[difficulty];
    return riddles.filter(riddle => difficultyLevels[riddle.difficulty] <= maxLevel);

}





