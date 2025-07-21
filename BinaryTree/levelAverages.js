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


const levelAverages = (root) => {
    const levels = [];
    fillLevels(root,levels,0);
   const avgs = [];
   for(let level of levels) {
    getAvg(level);
    avgs.push(getAvg(level));
   }
   console.log(avgs);
}


const getAvg = (array) => {
    let sum = 0;
    for(let num of array) {
        sum += num;
    }
    return sum/array.length;
}

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


levelAverages(a);