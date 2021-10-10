/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => '' + b + a - ('' + a + b));
  return BigInt(nums.join('')).toString();
};

/**
 * https://leetcode.com/problems/largest-number/
 * 179. Largest Number
 *
 * Runtime: 72 ms, faster than 93.63% of JavaScript online submissions for Largest Number.
 * Memory Usage: 40.8 MB, less than 25.20% of JavaScript online submissions for Largest Number.Memory Usage: 40.2 MB, less than 82.76% of JavaScript online submissions for Largest Number.
 */
