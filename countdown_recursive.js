const countDown = (n) => {

    // this is the base case to stop the execusion of the recursive function meeaning 
    // calling the same function again
    if (n === 0) {
        return;
    }

    console.log('entering',n);
    countDown(n - 1);
    console.log('returning from',n);
}

countDown(5);