function multiply(a) {
  return function(b) {
    let res = a * b;
    console.log(res);
  }
}

multiply(5)(6); //30



// infinte Currying
// when you want to pass multiple arguments & don't know the count.

function infiadd(a) {
  return function(b) {
    if(b) return infiadd(a+b);
    return a;
  }
}

// console.log(infiadd(5)(3)(2)(5)()); //15



