const pairSum = (numbers,targetSum) => {
 const previouNum = {};

 for(let i=0;i<numbers.length;i++){
    const num = numbers[i];
    const complement = targetSum - num;

    if(complement in previouNum) {
        console.log([i,previouNum[complement]]);
    }

    previouNum[num] = i;
 }
}

pairSum([4, 7, 9, 2, 5, 1], 3);
pairSum([4, 7, 9, 2, 5, 1], 5);