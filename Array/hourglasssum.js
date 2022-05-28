// Given a 6X6 2D Array. An hourglass in  is a subset of values with indices falling in this pattern 
// in 's graphical representation. 

// a b c
//   d
// e f g

// There are 16 hourglasses in array. An hourglass sum is the sum of an hourglass values. 
// Calculate the hourglass sum for every hourglass in , 
// then print the maximum hourglass sum. The array will always be 

// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0

// The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2

// 0 4 3
//   1
// 8 6 6

const input = [
  [1,1,1,0,0,0],
  [0,1,0,0,0,0],
  [1,1,1,0,0,0],
  [0,0,2,4,4,0],
  [0,0,0,2,0,0],
  [0,0,1,2,4,0],
]
//19

const input2 = [
  [-1,-1,0,-9,-2,-2],
  [-2,-1,-6,-8,-2,-5],
  [-1,-1,-1,-2,-3,-4],
  [-1,-9,-2,-4,-4,-5],
  [-7,-3,-3,-2,-9,-9],
  [-1,-3,-1,-2,-4,-5],
]
//-6

console.log(hourglassSum(input2)); //expected 19

function hourglassSum(arr) {
  let maxsum = -9999999;
  // Write your code here
  for(let i=0; i<4; i++) {
      for (let j=0; j<4; j++) {
          let top = arr[i][j] + arr[i][j+1] + arr[i][j+2]
          let middle = arr[i+1][j+1]
          let bottom = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
          let sum = top+ middle + bottom;
          console.log(sum);
          maxsum = Math.max(maxsum, sum);
      }
  }
  
  return maxsum;
  // (0,0) (0,1) (0,2) (1,2) (2,0) (2,1) (2,2)
  // (0,1) (0,2) (0,3) (1,3) (2,1) (2,2) (2,3)
}


//Note: test case failes for a negative matrix value 
//since math.max fails when maxsum is initialized as 0

