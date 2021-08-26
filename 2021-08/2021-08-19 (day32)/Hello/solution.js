/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  return nums.reduce((sum, num, index) => sum ^ num ^ index, nums.length);
}
