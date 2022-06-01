/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const map = {};

  for (const num of nums) {
    if (num in map) {
      return true;
    }

    map[num] = true;
  }

  return false;
}
