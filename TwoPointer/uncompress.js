const uncompress = (s) => {
    const numbers = '0123456789';
    let result = [];
    let i = 0;
    let j = 0;

    while (j < s.length) {
        if (numbers.includes(s[j])) {
            j += 1;
        } else {
            const num = Number(s.slice(i, j));
            for (let c = 0; c < num; c++) {
                result.push(s[j]);
            }
            j += 1;
            i = j;
        }
    }
    console.log(result.join(''));
};


uncompress("2c3a1t");