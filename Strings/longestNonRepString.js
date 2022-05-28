//write the longest non-repetitive string
let str ='abfcabcdefba'
 
const longestNonRepString = str => {
  
  let maxArray = [];
  let maxStringLength = 0;
  
  for(let i=0; i<str.length; i++) {
   maxArray = [];
   maxArray.push(str[i]);
   //console.log(maxArray);
   
   for (let j =i+1; j<str.length; j++) {
     //console.log(i,j)
    if(maxArray.includes(str[j])) {
      maxStringLength = Math.max(maxArray.length, maxStringLength);
    // console.log(maxArray);
      maxArray = [];
      break;
    } else {
        maxArray.push(str[j]);
        console.log(maxArray);
    }    
   }
  }
  return maxStringLength;
}

console.log(longestNonRepString(str))


//the for loop is different in this case, we start 'j' with one plus i 
//& till the string length everytime.

//we create an array to check non-repetition, 
//which gets refreshed everytime we find a string becomes repetited