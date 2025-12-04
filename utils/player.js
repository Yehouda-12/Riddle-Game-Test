
export function createplayer(name) {
  let seconds = [];

  return { name: name, time: seconds };
}


export function addSolveTime(player, seconds) {
  player.time.push(seconds);
}

export function showStats(player) {
  let total = 0;
  for (let i = 0; i < player.time.length; i++) {
    total += player.time[i];
  }
  let average = total / player.time.length;
  console.log(`Total time : ${total} seconds.`);
  console.log(`Average time per riddle : ${average} seconds.`);
  if (total < 10 * player.time.length) {
    console.log(`Great job ${player.name} !`);
  } else {
    console.log(`You'll do better next time ${player.name} !`);
  }
}


