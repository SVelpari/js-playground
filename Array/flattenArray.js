//recursion function to flatten an array with any depth

let arr =[1,2,3,[4],[5,[6,[7],8]]]
//output = [1,2,3,4,5,6,7,8]
let output = [];
function flattenArray(arr) {

//method 01
for(let i =0; i<arr.length; i++) {
 //console.log(typeof(arr[i]));
 if(typeof(arr[i]) === "number") {
   output.push(arr[i])
 } else {
   flattenArray(arr[i])
   //output.push(...arr[i]);
 }
}

//method 02
// arr.map((el) => {
//   if (typeof(el) === 'number')
//     output.push(el)
//   else 
//    flattenArray(el)
// })

return output;


}

console.log(flattenArray(arr)); 


