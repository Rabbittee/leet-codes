/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const length = triangle.length;
  const min = triangle[length - 1];

  for (let i = length - 2; i >= 0; --i) {
    for (let j = 0; j <= i; ++j) {
      min[j] = triangle[i][j] + Math.min(min[j], min[j + 1]);
    }
  }
  return min[0];
};

/**
 * https://leetcode.com/problems/triangle/
 * 120. Triangle
 *
 * Runtime: 64 ms, faster than 99.73% of JavaScript online submissions for Triangle.
 * Memory Usage: 39.2 MB, less than 81.52% of JavaScript online submissions for Triangle.
 */
