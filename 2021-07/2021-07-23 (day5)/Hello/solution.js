/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  function run(start, end) {
    if (start >= end) {
      return end;
    }

    const mid = start + Math.floor((end - start) / 2);
    const value = nums[mid];

    if (value === target) {
      return mid;
    }

    return value < target ? run(mid + 1, end) : run(start, mid);
  }

  return run(0, nums.length);
}
