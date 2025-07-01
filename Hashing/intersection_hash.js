const intersection = (a, b) => {

    let count = {}

    for (let val of a) {
        if (!(val in count)) {
            count[val] = 0;
        }
        count[val] += 1;
    }

    let result = [];
    for (let val of b) {
        if (val in count) {
            count[val] -= 1;
        }

        if (count[val] === 0) {
            result.push(val);
        }

    }





    console.log(result);

}


intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]);