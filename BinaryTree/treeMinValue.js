class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeMinValue = (root) => {
    //RECURSIVE
    if (root === null) return Infinity;

    const leftValues = treeMinValue(root.left);
    const rightValues = treeMinValue(root.right);

    return Math.min(root.val, leftValues, rightValues);


    //ITERATIVE
    //  const stack = [root];
    //  let smallest = Infinity;

    //  while(stack.length > 0) {
    //     const current = stack.pop();

    //     if(current.val < smallest) {
    //         smallest = current.val
    //     }

    //     current.left && stack.push(current.left);
    //     current.right && stack.push(current.right);
    //  }
    //  console.log(smallest);
};

treeMinValue(a);