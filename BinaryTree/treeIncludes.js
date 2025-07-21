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

const treeIncludes = (root, target) => {

    //RECURSIVE METHOD

    if (root === null) return false;
    if(root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target)


    //ITERATIVE METHOD
    //   if(root === null) console.log(false);

    //   const stack = [root];

    //   while(stack.length > 0) {
    //     const current = stack.pop();

    //     if(current.val === target) {
    //         console.log(true);
    //     }


    //     current.left && stack.push(current.left);
    //     current.right && stack.push(current.right);
    //   }
    //   console.log(false);
};



treeIncludes(a, "n");
treeIncludes(a, "a");