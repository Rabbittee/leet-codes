/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};

/**
 * https://leetcode.com/problems/array-partition-i/
 * 561. Array Partition I
 *
 * Runtime: 116 ms, faster than 93.44% of JavaScript online submissions for Array Partition I.
 * Memory Usage: 44.5 MB, less than 38.93% of JavaScript online submissions for Array Partition I.
 */
