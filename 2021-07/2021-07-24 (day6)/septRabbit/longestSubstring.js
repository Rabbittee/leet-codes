var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let str = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    //check from first char to see if there is the same char, if yes, empty str

    if (str.indexOf(s[i]) !== -1) {
      str.splice(0, str.indexOf(s[i]) + 1);
    }
    //start over with s[i]. s[i] will not be removed.
    str.push(s[i]);

    //store the current string length and compare each time we find the new non repeatable string
    max = Math.max(max, str.length);
  }
  return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
