const maxVal = (nums) => {
  let maxNumber = -Infinity;

  for(let num of nums) {
    if(num > maxNumber) {
        maxNumber = num;
    }
  }
  console.log(maxNumber);
}

maxVal([10, 5, 40, 40.3]);
maxVal([-5, -2, -1, -11]);