/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayPairSum(nums) {
  nums = nums.sort((a, b) => a - b);

  let sum = 0;

  for (let index = 0; index < nums.length; index += 2) {
    sum += Math.min(nums[index], nums[index + 1]);
  }

  return sum;
}
