const longestWord = (sentence) => {
 let longest = '';

 let words = sentence.split(" ");
 for(let word of words) {
    if(word.length >= longest.length){
        longest = word;
    }
 }
console.log(longest);
}

longestWord("Have a nice day");
longestWord("What a wonderful day");