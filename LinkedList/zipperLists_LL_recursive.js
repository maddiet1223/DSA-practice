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


const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;

const zipperLists = (head1, head2) => {
    if (head1 === null && head2 === null) return null;

    if (head1 === null) return head2;
    if (head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2

    head1.next = zipperLists(next1, next2);


    return head1
}