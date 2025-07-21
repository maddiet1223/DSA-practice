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

const pathFinder = (root, target) => {
    const result = pathFinderHelper(root, target);
    if (result === null) {
        return null;
    } else {
        return result.reverse();
    }
}

const pathFinderHelper = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [root.val];


    const leftPath = pathFinderHelper(root.left, target);
    if (leftPath !== null) {
        leftPath.push(root.val);
        return leftPath;
    }
    const rightPath = pathFinderHelper(root.right, target);

    if (rightPath !== null) {
        rightPath.push(root.val);
        return rightPath;
    }
    return null;

};

pathFinder(a, 'e'); 