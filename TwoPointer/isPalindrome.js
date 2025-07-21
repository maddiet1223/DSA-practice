const isPalindrome = (s) => {
    let i = 0;
    let j = s.length - 1;

    while(i<j) {
       if(s[i] !== s[j]) {
        console.log(false);
       }

        i += 1;
        j -= 1;
    }
    console.log(true);
};


isPalindrome('kayak');