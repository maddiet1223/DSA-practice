const anagrams = (s1, s2) => {
 const count = {};

 for(let char of s1) {
    if(!(char in count)) {
        count[char] = 0;
    }
    count[char] += 1;
 }

 for(let char of s2) {
    if(char in count) {
        count[char] -= 1;
    } else {
        console.log(false);
        return;
    }
 }

 for(let char in count) {
    if(count[char] !== 0) {
        console.log(false);
        return;
    }
 }

 console.log(true);
};

anagrams('cats','tacs');
anagrams('cats','tocs');
anagrams('paper', 'reapa');
anagrams('restful', 'fluster');