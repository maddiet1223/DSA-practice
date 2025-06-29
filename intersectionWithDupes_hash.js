const intersectionWithDupes = (a, b) => {
    const countA = eleCount(a);
    const countB = eleCount(b);
    const result = [];

    for (let ele in countA) {
        if (ele in countB) {
            for (let i = 0; i < Math.min(countA[ele], countB[ele]); i++) {
                result.push(ele);
            }
        }
    }
    console.log(result);
}


const eleCount = (elements) => {
    const count = {};

    for (let ele of elements) {
        if (!(ele in count)) {
            count[ele] = 0;
        }
        count[ele] += 1;
    }
    return count;
}

intersectionWithDupes(
    ["q", "b", "m", "s", "s", "s"],
    ["s", "m", "s"]
);