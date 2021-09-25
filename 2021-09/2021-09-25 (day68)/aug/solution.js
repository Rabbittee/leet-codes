/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const path = Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      path[j] = path[j - 1] + path[j];
    }
  }

  return path[n - 1];
};

/**
 * https://leetcode.com/problems/unique-paths/submissions/
 * 62. Unique Paths
 *
 * Runtime: 60 ms, faster than 99.29% of JavaScript online submissions for Unique Paths.
 * Memory Usage: 39 MB, less than 51.97% of JavaScript online submissions for Unique Paths.
 */
