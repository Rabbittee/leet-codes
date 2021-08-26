/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const nums = nums1.concat(nums2).sort((a, b) => a - b);

  return nums.length % 2
    ? // if odd
      nums[(nums.length - 1) / 2]
    : // if even
      (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
}

function main() {
  [
    { test: { left: [1, 3], right: [2] }, expect: 2 },
    { test: { left: [1, 2], right: [3, 4] }, expect: 2.5 },
    { test: { left: [1, 3], right: [2, 7] }, expect: 2.5 },
    { test: { left: [0, 0], right: [0, 0] }, expect: 0 },
    { test: { left: [], right: [1] }, expect: 1 },
    { test: { left: [2], right: [] }, expect: 2 },
  ].forEach(({ test: { left, right }, expect }) => {
    console.assert(
      findMedianSortedArrays(left, right) === expect,
      `input findMedianSortedArrays(${left}, ${right}) \
		get ${findMedianSortedArrays(left, right)} not equals expect ${expect}`
    );
  });
}

main();
