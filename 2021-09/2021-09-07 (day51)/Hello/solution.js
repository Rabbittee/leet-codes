/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const result = [];

  for (const num of nums2) {
    const index = nums1.indexOf(num);

    if (index !== -1) {
      result.push(num);

      nums1.splice(index, 1);
    }
  }

  return result;
}
