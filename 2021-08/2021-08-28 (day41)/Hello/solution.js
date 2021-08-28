/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums, current = nums.length - 1, dp = nums.length - 1) {
  if (current === 0) return dp === 0;

  current -= 1;

  if (current + nums[current] >= dp) {
    dp = current;
  }

  return canJump(nums, current, dp);
}
