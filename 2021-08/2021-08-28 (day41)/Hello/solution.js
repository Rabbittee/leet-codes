/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let dp = nums.length - 1;

  for (let index = dp - 1; index >= 0; index--) {
    if (index + nums[index] >= dp) {
      dp = index;
    }
  }

  return dp === 0;
}
