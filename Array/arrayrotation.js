// A left rotation operation on an array shifts each of the array's elements
// unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5]
// then the array would become [3,4,5,1,2]

//function accepts array, no.of.rotations as input

function rotateLeft(a, d) {
  
  for(let i =0; i<d; i++) {
      let temp = a.shift();
      a.push(temp);
  }
  return a;
}

console.log(rotateLeft([1,2,3,4,5], 3));

//link: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen