let arr = [1,2,3,4,2,5,6,3]

function removeDuplicate(arr) {
  let obj = {}, output = [];
  for(let i =0; i<arr.length; i++) {
    //console.log(obj[arr[i]]);
    if(obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
      output.push(arr[i]);
    }
  }
  return output;
}



console.log(removeDuplicate(arr));