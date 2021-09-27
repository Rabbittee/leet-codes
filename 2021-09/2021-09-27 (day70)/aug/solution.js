/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = nums[0];
  let max = sum;

  for (let i = 1; i < nums.length; ++i) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(max, sum);
  }
  return max;
};

/**
 * https://leetcode.com/problems/maximum-subarray/
 * 53. Maximum Subarray
 *
 * Runtime: 80 ms, faster than 70.52% of JavaScript online submissions for Maximum Subarray.
 * Memory Usage: 48.5 MB, less than 5.00% of JavaScript online submissions for Maximum Subarray.
 */
