/**
 * @param {number} n
 * @return {number}
 */
function getMaximumGenerated(n, i = 1, nums = [0, 1]) {
  if (n < i) return 0;

  if (2 * i + 1 > n) return Math.max(...nums);

  nums[2 * i] = nums[i];
  nums[2 * i + 1] = nums[i] + nums[i + 1];

  return getMaximumGenerated(n, i + 1, nums);
}
