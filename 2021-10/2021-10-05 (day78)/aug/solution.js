/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  if (!s.length) return 0;

  const ascending = (a, b) => a - b;
  g == g.sort(ascending);
  s = s.sort(ascending);

  let i = 0;
  let j = 0;

  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) i++;
    j++;
  }

  return i;
};

/**
 * Runtime: 88 ms, faster than 97.90% of JavaScript online submissions for Assign Cookies.
 * Memory Usage: 41.5 MB, less than 48.60% of JavaScript online submissions for Assign Cookies.
 */
