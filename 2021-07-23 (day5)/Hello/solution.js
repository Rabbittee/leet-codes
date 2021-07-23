/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  function run(start, end) {
    const mid = start + Math.floor((end - start) / 2);

    if (start >= end) {
      return end;
    }

    if (nums[mid] === target) {
      return mid;
    }

    return nums[mid] < target ? run(mid + 1, end) : run(start, mid);
  }

  return run(0, nums.length);
}
