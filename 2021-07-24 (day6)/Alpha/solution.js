/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  s = s.split('');
  if (s.length === 0) {
      return 0;
  } 
  let ans = 0;
  let stack = [];
  for (i=0; i< s.length; i++) {
      stack.push(s[i]);
      if (s[i] === s[i+1]) {
          if (stack.length > ans) {
              ans = stack.length;
          }
          stack = [];
      }
  }
  return ans
};