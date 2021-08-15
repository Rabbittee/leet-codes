/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums.splice(i, nums.lastIndexOf(nums[i]) - i).length;
  }

  return nums.length;
}
