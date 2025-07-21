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

const insertNode = (head, value, index, count = 0) => {
//RECURSIVE METHOD
if(head === null) return null;

  if(index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  if(count === index - 1) {
    const temp = head.next;
    head.next = new Node(value);
    head.next.next = temp;
    return head;
  }
  insertNode(head.next,value,index,count+1);
  return head;


    //ITERATION METHOD
//     if(index === 0) {
// const newHead = new Node(value);
// newHead.next = head;
// return newHead;
//     }

//     let current = head;
//     let count = 0;

//     while(current !== null) {
// if(count === index - 1) {
//     const temp = current.next;
//     current.next = new Node(value);
//     current.next.next = temp;
// }

//         count += 1;
//         current = current.next;
//     }
// return head;
};


insertNode(a, 'x', 2);


