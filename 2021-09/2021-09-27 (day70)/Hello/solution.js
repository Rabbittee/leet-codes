/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let prev = 0;
  let max = -Infinity;

  for (const num of nums) {
    prev = Math.max(num, prev + num);
    max = Math.max(prev, max);
  }

  return max;
}
