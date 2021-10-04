/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const happy = ['a', 'b', 'c'];
  let index = 0;

  function helper(current = '', char = '') {
    if (current.length === n) {
      index++;
      return current;
    }

    const filtered = happy.filter((c) => c !== char);

    for (let i = 0; i < filtered.length; i++) {
      const ans = helper(current + filtered[i], filtered[i]);
      if (index === k) return ans;
    }

    return '';
  }

  return helper();
};

/**
 * https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 *
 * Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for The k-th Lexicographical String of All Happy Strings of Length n.
 * Memory Usage: 41.8 MB, less than 75.00% of JavaScript online submissions for The k-th Lexicographical String of All Happy Strings of Length n.
 */
