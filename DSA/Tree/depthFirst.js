// Traversing a Binary Tree thorugh Depth First 

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
/*
         a
       /   \
      b     c
     / \     \
    d   e     f
  
*/

//creating a stack - where for every node, you push the right first and left next - 
//recursively and then picking the top of stack and pushing it to result
//we traverse the BST DepthFirst and return an output.

var depthFirstValues = (root) => {
  const result = [];
  const stack = [root];

  while(stack.length > 0) {
   const current = stack.pop();
   result.push(current.val);

   if(current.right)
     stack.push(current.right)
   if(current.left)
     stack.push(current.left)
  }
  return result
}

console.log(depthFirstValues(a));

