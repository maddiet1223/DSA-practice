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
   let count = 0;
    let current = head;

    while (current !== null) {
      if(count === index) {
            return current.val;
        } 
        current = current.next;
        count += 1;
        
    }
  return current;
  
};


getNodeValue(a, 2);
getNodeValue(a, 7);