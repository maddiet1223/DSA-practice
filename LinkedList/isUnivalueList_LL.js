class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

const isUnivalueList = (head,prevVal = null) => {
//RECURSIVE METHOD
if(head === null) return true;
if(prevVal !== null && head.val !== prevVal) {
    return false;
}

return isUnivalueList(head.next,head.val);

    //ITERATIVE METHOD
//   let current = head;
 

//   while(current !== null) {
//     if(current.val !== head.val) {
//        console.log(false);
//        return
//     } 
//     current = current.next;
//    }
   
//    console.log(true);

};

isUnivalueList(a); 