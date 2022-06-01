// There is a new mobile game that starts with consecutively numbered clouds. 
// Some of the clouds are thunderheads and others are cumulus. 
// The player can jump on any cumulus cloud having a number that is equal to 
// the number of the current cloud plus 1 or 2. 
// The player must avoid the thunderheads. 
// Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. 
// It is always possible to win the game.

// For each game, you will get an array of clouds numbered 0 if they are safe or 
// 1 if they must be avoided.

// ip: 0 1 0 0 0 1 0
// op: 3
// path1: 0 -> 2 -> 3 -> 4 -> 6
// path2: 0 -> 2 -> 4 -> 6 //shortest path

function jumpingOnClouds(c,n) {
  let counter = 0, i = 0;
  //console.log(n);
  while (i < n-1) {
      if(c[i+2]!==1) {
          counter++;
          i=i+2;
      } else {
          counter++;
          i++;
      }
      //console.log(i)
  }
  return counter;
}

console.log(jumpingOnClouds([0,1,0,0,0,1,0],7));