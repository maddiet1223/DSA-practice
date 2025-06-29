
const palindrome = (s) => {
    if (s.length === 0 || s.length === 1) {
       return true;
    }

    if (s[0] !== s[s.length - 1]) {
     return false;
    }

    return palindrome(s.slice(1, -1));

}

export default {
  palindrome,
};

palindrome("pops")