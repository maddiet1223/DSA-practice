const pairs = (elements) => {
  let result = [];

  for(let i=0;i<elements.length;i++){
    for(j=i+1;j<elements.length;j++){
        const pairs = [elements[i],elements[j]];
        result.push(pairs);
    }
  }
console.log(result);

};

pairs(["a", "b", "c", "d"])