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


const treeSum = (root) => {
    //RECURSIVE METHOD
    if(root === null) return 0;

     const leftValues = treeSum(root.left);
     const rightValues = treeSum(root.right);

     return root.val + leftValues + rightValues

    //ITERATIVE VERSION

    // if (root === null) return 0;
    // let totalSum = 0;
    // const queue = [root]
    // while (queue.length > 0) {
    //     const current = queue.shift();
    //     totalSum += current.val;
        
    //     current.left && queue.push(current.left);
    //     current.right && queue.push(current.right);
    // }
    // console.log(totalSum);
};


treeSum(a);