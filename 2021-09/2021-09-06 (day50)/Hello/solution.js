/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  nums.sort((a, b) => a - b);

  return nums[Math.floor(nums.length / 2)];
}
