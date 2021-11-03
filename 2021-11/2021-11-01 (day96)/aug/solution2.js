/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let diff = 0;

  for (let i = 0; i < t.length; i++) {
    diff ^= s[i] ? t[i].charCodeAt() ^ s[i].charCodeAt() : t[i].charCodeAt();
  }

  return String.fromCharCode(diff);
};

/**
 * https://leetcode.com/problems/find-the-difference/
 * 389. Find the Difference
 *
 * Runtime: 64 ms, faster than 99.81% of JavaScript online submissions for Find the Difference.
 * Memory Usage: 40.2 MB, less than 63.93% of JavaScript online submissions for Find the Difference.
 */
