/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  return nums.reduce((a, b) => a ^ b, 0);
}
