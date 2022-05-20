const array1 = [[0, 1], [2, 3,4,5], [4, 5, 6]];

const result = array1.reduce((accumulator, currentValue) => accumulator.concat(currentValue));

// console.log(result);
// expected output: Array [4, 5, 2, 3, 0, 1]

// console.log(array1.flat(Infinity));


// const arr = [1,2,3,4,5]
// const answer = arr.reduce((prev, curr) => prev + curr, 0);
// console.log(answer);


