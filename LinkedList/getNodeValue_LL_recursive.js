class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const getNodeValue = (head, index) => {
   if(head === null) return null;
   if(index === 0) return head.val;

   return getNodeValue(head.next,index - 1);

  
};



getNodeValue(a, 2);
getNodeValue(a, 7);