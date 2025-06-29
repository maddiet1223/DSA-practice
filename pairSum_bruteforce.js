const pairSum = (numbers,targetSum) => {
      for(let i=0;i<numbers.length;i++) {
        for(let j=i+1;i<numbers.length;j++) {
            if(numbers[i] + numbers[j] === targetSum) {
                console.log([i,j]);
              
            }
        }
    }
    
}


pairSum([4, 7, 9, 2, 5, 1], 3);