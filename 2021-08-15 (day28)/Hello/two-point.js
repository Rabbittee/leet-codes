/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let point = 0;

  while (true) {
    let cursor = nums.lastIndexOf(nums[point]) + 1;

    if (cursor >= nums.length) break;

    if (cursor === point) continue;

    point += 1;
    nums[point] = nums[cursor];
  }

  return point + 1;
}
