/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums, point = 0) {
  const cursor = nums.lastIndexOf(nums[point]) + 1;

  if (cursor >= nums.length) return point + 1;

  if (cursor !== point) {
    nums[++point] = nums[cursor];
  }

  return removeDuplicates(nums, point);
}
