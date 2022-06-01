// An avid hiker keeps meticulous records of their hikes. 
//During the last hike that took exactly 'steps' steps, for every step it was noted 
//if it was an uphill, U , or a downhill, D step. 
//Hikes always start and end at sea level, 
//and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, 
//starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, 
//starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, 
//find and print the number of valleys walked through.

//steps = 8, path = [DDUUUUDD]
//example: The hiker first enters a valley 2 units deep. 
//Then they climb out and up onto a mountain 2 units high. 
//Finally, the hiker returns to sea level and ends the hike.

//inp: 8, UDDDUDUU
//op: 1
// _/\      _
//    \    /
//     \/\/

function countingValleys(steps, path) {
  let counter = 0;
  let valley = 0;
  for(let i=0;i<steps;i++) {
      
      if(path[i] === 'U') {
          counter++;
      } else {
          counter--;
      }
      
      if(counter < 0) {
          for(let j=i+1;j<steps;j++) {
              if(path[j] === 'U') {
                  counter++;
              } else {
                   counter--;
              }
              if(counter == 0) {
                  valley = valley + 1;
                  i = j;
                  break;
              }
          } 
      }
  }
  return valley
}

console.log(countingValleys(12,DDUUDDUDUUUD));

//Soln: One Valley is crossed if the counter becomes 0 after encountering a -1
//Here we ran a weird inner loop, which gets activated everytime the counter becomes -1
//breaks out of that loop when it becomes 0 again & continues with next i
//here we followup the i after j is completed by copying it's value


// TestCase: 12, DDUUDDUDUUUD Output: 2