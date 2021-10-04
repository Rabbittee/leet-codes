/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const happy = ['a', 'b', 'c'];
  const list = [];

  function helper(current = '', char = '') {
    if (list.length === k) {
      return;
    }

    if (current.length === n) {
      list.push(current);
      return;
    }

    const filtered = happy.filter((c) => c !== char);

    for (let i = 0; i < filtered.length; i++) {
      helper(current + filtered[i], filtered[i]);
    }
  }

  helper();

  return list[k - 1] ?? '';
};

// getHappyString(3, 9);

/**
 * https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 *
 * Runtime: 76 ms, faster than 97.73% of JavaScript online submissions for The k-th Lexicographical String of All Happy Strings of Length n.
 * Memory Usage: 42 MB, less than 72.73% of JavaScript online submissions for The k-th Lexicographical String of All Happy Strings of Length n.
 */
