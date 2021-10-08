/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let res = 0;

  for (let i = 0, j = 0; i < s.length; i++) {
    s[0] === s[i] ? j-- : j++;
    !j && res++;
  }

  return res;
};

/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * 1221. Split a String in Balanced Strings
 *
 * Runtime: 64 ms, faster than 96.86% of JavaScript online submissions for Split a String in Balanced Strings.
 * Memory Usage: 39 MB, less than 50.67% of JavaScript online submissions for Split a String in Balanced Strings.
 */
