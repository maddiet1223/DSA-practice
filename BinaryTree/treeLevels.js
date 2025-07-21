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

const treeLevels = (root) => {
//RECURSIVE METHOD
const levels = [];
fillLevels(root,levels,0);
return levels;

    //ITERATIVE METHOD
    // if (root === null) return [];
    // const levels = [];
    // const stack = [{ node: root, levelNum: 0 }];

    // while (stack.length > 0) {
    //     const { node, levelNum } = stack.pop();
    //     if (levels.length === levelNum) {
    //         levels.push([node.val]);
    //     } else {
    //         levels[levelNum].push(node.val);
    //     }

    //     node.right && stack.push({ node: node.right, levelNum: levelNum + 1 });
    //     node.left && stack.push({ node: node.left, levelNum: levelNum + 1 });
    // }
    // console.log(levels);
};

//this function only for recursive method
const fillLevels = (root,levels,levelNum) => {
    if(root === null) return [];


    if(levels.length === levelNum) {
     levels.push([root.val]);
   } else {
     levels[levelNum].push(root.val);
   }

   fillLevels(root.left,levels,levelNum + 1);
   fillLevels(root.right,levels,levelNum + 1);
}


treeLevels(a);

