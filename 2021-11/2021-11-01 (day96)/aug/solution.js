/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sum = 0;

  for (let i = 0; i < t.length; i++) {
    sum += t[i].charCodeAt();
    if (s[i]) sum -= s[i].charCodeAt();
  }

  return String.fromCharCode(sum);
};

/**
 * https://leetcode.com/problems/find-the-difference/
 * 389. Find the Difference
 *
 * Runtime: 68 ms, faster than 99.24% of JavaScript online submissions for Find the Difference.
 * Memory Usage: 39.8 MB, less than 88.17% of JavaScript online submissions for Find the Difference.
 */
