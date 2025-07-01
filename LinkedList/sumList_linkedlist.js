class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const sumList = (head) => {
    let sum = 0;
    let current = head;
    while (current !== null) {
        sum = sum + current.val;
        current = current.next;
    }

    console.log(sum);

};

sumList(1);