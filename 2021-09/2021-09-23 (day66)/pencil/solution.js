/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  let arrT = [];

  for (let i = 0; i < t.length; i ++) {
    // convert string to array
    arrT.push(t[i]);
  }

  for (let i = 0; i < s.length; i ++) {
    const matchIndex = arrT.findIndex((n) => n === s[i]);

    // if there's no match, findIndex will return -1
    if (matchIndex === -1) { return false };

    arrT = arrT.slice(matchIndex + 1);
  }
  return true;
};

/**
 * https://leetcode.com/problems/is-subsequence/
 * 392. Is Subsequence
 * Runtime: 80 ms, faster than 48.96% of JavaScript online submissions for Is Subsequence.
 * Memory Usage: 40.8 MB, less than 6.59% of JavaScript online submissions for Is Subsequence.
 */