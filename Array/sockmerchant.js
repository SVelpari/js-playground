// There is a large pile of socks that must be paired by color. 
//Given an array of integers representing the color of each sock, 
//determine how many pairs of socks with matching colors there are

//ip: [10,20,20,10,10,30,50,10,20]
//op: 3 
//two pairs of ten & one pair of twenty

function sockMerchant(n, ar) {
  // Write your code here
  let obj = {}
  for(let i=0;i<n;i++) {
      if(obj[ar[i]] === undefined) {
          obj[ar[i]] = 1;
      } else {
          obj[ar[i]] = obj[ar[i]] + 1;
      }
  }
  let array = [...Object.values(obj)];
  let result = array.reduce((acc,el) => acc + Math.floor(el/2),0);
  
  return result;
}

console.log(sockMerchant(9,[10,20,20,10,10,30,50,10,20]));