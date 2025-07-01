const exclusiveItems = (a, b) => {
    const result = [];
    const setA = new Set(a);
    const setB = new Set(b);

    for (let item of a) {
        if (!(setB.has(item))) {
            result.push(item);
        }
    }

    for (let item of b) {
        if (!(setA.has(item))) {
            result.push(item);
        }
    }



    console.log(result);
}

exclusiveItems([4, 2, 1, 6], [3, 6, 9, 2, 10]);