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
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const reverseList = (head) => {
  let current = head;
  let previous = null;

  while(current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
 console.log(previous);
};

reverseList(a);