// Compose Polyfill
// passing the output of one function as input to another

function addtwo(a) {
  return a+2;
}

function multhree(a) {
  return a*3;
}

function addfour(a) {
  return a+4;
}

const compose = (...functions) => {
  return (starter) => functions.reduceRight((prev, curr) => curr(prev), starter);
}

console.log(compose(addtwo, multhree, addfour)(5)) // 29

