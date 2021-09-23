/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // pointer (index)of s
  let iS = 0;

  // pointer (index) of t
  let iT = 0;

  while (iS < s.length && iT < t.length) {
    // match next char of s when current char is matched
    if (s[iS] === t[iT]) iS++;

    // move to next char of t
    iT++;
  }

  // the index of s equaling to the length of s
  // means all the chars of s are matched.
  return iS === s.length;
};

/**
 * https://leetcode.com/problems/is-subsequence/
 * 392. Is Subsequence
 *
 * Runtime: 64 ms, faster than 97.91% of JavaScript online submissions for Is Subsequence.
 * Memory Usage: 39 MB, less than 48.96% of JavaScript online submissions for Is Subsequence.
 */
