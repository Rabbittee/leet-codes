/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n < 2) return n;

  const res = [0, 1];

  for (let i = 2; i <= n; ++i) {
    const half = i >> 1;

    if (i & 1) {
      res[i] = res[half] + res[half + 1];
    } else {
      res[i] = res[half];
    }
  }

  return Math.max(...res);
};

/**
 * https://leetcode.com/problems/get-maximum-in-generated-array/
 * 1646. Get Maximum in Generated Array
 *
 * Runtime: 60 ms, faster than 99.55% of JavaScript online submissions for Get Maximum in Generated Array.
 * Memory Usage: 38.9 MB, less than 53.81% of JavaScript online submissions for Get Maximum in Generated Array.
 */
