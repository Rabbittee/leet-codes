/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in cache) {
      return [i, cache[nums[i]]];
    }

    cache[target - nums[i]] = i;
  }
}
