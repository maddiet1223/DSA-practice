class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const leafList = (root) => {
    //RECURSIVE METHOD

    // if(root === null) return null;

    // const 
    //ITERATIVE DEPTH FIRST
    if (root === null) return null;
    const leaves = [];
    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        if(current.left === null && current.right === null) {
            leaves.push(current.val);
        }

        current.right && stack.push(current.right);
        current.left && stack.push(current.left);

    }
    console.log(leaves);
};


leafList(a); 
