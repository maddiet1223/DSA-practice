const pairProduct = (numbers,targetProduct) => {
    const previousNum  = {};

    for(let i=0;i< numbers.length;i++) {
        const num = numbers[i];
        const complementNum  = targetProduct / num ;

        if(complementNum in previousNum) {
            console.log([i,previousNum[complementNum]]);
            
        }

        previousNum[num] = i;
    }
}

pairProduct([4, 7, 9, 2, 5, 1], 36);
pairProduct([4, 7, 9, 2, 5, 1], 5);