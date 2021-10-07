/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const set = new Set();
  let count = 0;

  for (const char of s) {
    if (set.has(char)) {
      count += 2;
      set.delete(char);
    } else {
      set.add(char);
    }
  }

  return set.size > 0 ? count + 1 : count;
};

/**
 * https://leetcode.com/problems/longest-palindrome/
 * 409. Longest Palindrome
 *
 * Runtime: 60 ms, faster than 99.78% of JavaScript online submissions for Longest Palindrome.
 * Memory Usage: 41.3 MB, less than 8.97% of JavaScript online submissions for Longest Palindrome.
 */
