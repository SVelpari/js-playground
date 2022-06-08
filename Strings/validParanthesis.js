// By this logic, we say a sequence of brackets is balanced 
// if the following conditions are met:
// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets 
// is also a matched pair of brackets


function yoBalanced(s) {
  let flag = true;
  let a,b;
  while (flag) {
    let a = s.length;
    s = s.replace('()', '');
    s = s.replace('[]', '');
    s = s.replace('{}', '');
    let b = s.length;
    //console.log(a,b)
    if(a===b) {flag = false}
  }
    if (s.length == 0)
      return "YES"
    else 
      return "NO"
}

console.log(yoBalanced('{{[[(())]]}}'));

//{[()]} YES
//{[(])} NO

//note: https://www.hackerrank.com/challenges/balanced-brackets/problem