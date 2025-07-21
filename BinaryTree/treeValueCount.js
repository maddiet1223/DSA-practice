class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeValueCount = (root, target) => {
    //RECURSIVE
    if (root === null) return 0;
    const match = root.val === target ? 1 : 0
    return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);

    //ITERATIVE
    //if(root === null) return 0;
    // const stack = [root];
    // let count = 0;
    // while (stack.length > 0) {
    //     const current = stack.pop();
    //     if (current.val === target) {
    //         count += 1;
    //     }
    //     current.left && stack.push(current.left);
    //     current.right && stack.push(current.right);

    // }
    // console.log(count);
};


treeValueCount(a, 6);