/**
 * @param {number[]} nums
 * @return {number}
 */
<<<<<<< HEAD
function removeDuplicates(nums, point = 0) {
  const cursor = nums.lastIndexOf(nums[point]) + 1;

  if (cursor >= nums.length) return point + 1;

  if (cursor !== point) {
    nums[++point] = nums[cursor];
  }

  return removeDuplicates(nums, point);
=======
function removeDuplicates(nums) {
  let point = 0;

  while (true) {
    let cursor = nums.lastIndexOf(nums[point]) + 1;

    if (cursor >= nums.length) break;

    if (cursor === point) continue;

    point += 1;
    nums[point] = nums[cursor];
  }

<<<<<<< HEAD
  return point;
>>>>>>> bb9e6be (add two pointer)
=======
  return point + 1;
>>>>>>> 8bf3d19 (fix)
}
