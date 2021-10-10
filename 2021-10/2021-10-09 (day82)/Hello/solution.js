function area(height, left, right) {
  return Math.min(height[left], height[right]) * (right - left);
}

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(
  height,
  left = 0,
  right = height.length - 1,
  max = area(height, left, right)
) {
  if (height[left] > height[right]) {
    right -= 1;
  } else {
    left += 1;
  }

  return left >= right
    ? max
    : maxArea(height, left, right, Math.max(max, area(height, left, right)));
}
