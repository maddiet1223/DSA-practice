class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstValues = (root) => {
//RECURSION VERSION

// if(root === null) return [];
// const leftValues = depthFirstValues(root.left);
// const rightValues = depthFirstValues(root.right);
// return [root.val,...leftValues,...rightValues];


//ITERATIVE VERSION

const stack =  [root];
const result = [];
while(stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    current.right && stack.push(current.right);
    current.left && stack.push(current.left);
 }

console.log(result);

};

depthFirstValues(a);