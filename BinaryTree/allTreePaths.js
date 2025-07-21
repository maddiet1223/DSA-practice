class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const allTreePaths = (root) => {
  const paths = _allTreePaths(root);
 for(let path of paths) {
    path.reverse();
 }

  return path;
}

const _allTreePaths = (root) => {
  if(root === null) return [];
  if(root.left === null && root.right === null) return [[root.val]];

 const allPaths = [];
  const leftPath = _allTreePaths(root.left);

  for(path of leftPath) {
    path.push(root.val);
    allPaths.push(path);
  }
  const rightPath = _allTreePaths(root.right);
  for(path of rightPath) {
    path.push(root.val);
    allPaths.push(path);
  }

  return allPaths;
};

allTreePaths(a);

