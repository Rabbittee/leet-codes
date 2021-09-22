/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const res = [0];

  for (let i = 1; i <= n; i++) {
    // or Math.floor(i / 2)
    const half = i >> 1;

    // or Math.floor(i % 2)
    const odd = i & 1;

    /**
     * number of i's bits equals to number of i/2's bits
     * if odd, add 1.
     */
    res[i] = res[half] + odd;
  }

  return res;
};

/**
 * https://leetcode.com/problems/counting-bits/
 * 338. Counting Bits
 * Runtime: 92 ms, faster than 92.04% of JavaScript online submissions for Counting Bits.
 * Memory Usage: 45.1 MB, less than 56.09% of JavaScript online submissions for Counting Bits.
 */
