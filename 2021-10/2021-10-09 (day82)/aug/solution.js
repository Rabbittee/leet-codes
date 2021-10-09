/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const current = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, current);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

/**
 * https://leetcode.com/problems/container-with-most-water/
 * 11. Container With Most Water
 *
 * Runtime: 76 ms, faster than 98.07% of JavaScript online submissions for Container With Most Water.
 * Memory Usage: 47.5 MB, less than 95.26% of JavaScript online submissions for Container With Most Water.
 */
