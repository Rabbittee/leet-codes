/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let letterCasePermutation = function (s) {
  return getPermutation(s);
};

function getPermutation(s, ans = [], newStr = '', step = 0) {
  if (newStr.length == s.length) {
    ans.push(newStr);
    return;
  }

  const char = s[step];
  if (isAlpha(char)) {
    getPermutation(s, ans, newStr + char.toUpperCase(), step + 1);
    getPermutation(s, ans, newStr + char.toLowerCase(), step + 1);
  } else {
    getPermutation(s, ans, newStr + char, step + 1);
  }

  return ans;
}

function isAlpha(char) {
  return /^[A-Z]$/i.test(char);
}

/**
 * https://leetcode.com/problems/letter-case-permutation/
 * 784. Letter Case Permutation
 *
 * Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Letter Case Permutation.
 * Memory Usage: 42.7 MB, less than 76.50% of JavaScript online submissions for Letter Case Permutation.
 */
