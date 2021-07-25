/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const { POSITIVE_INFINITY, NEGATIVE_INFINITY } = Number;
  const { floor, max, min } = Math;

  const total = nums1.length + nums2.length;
  const mid = floor(total / 2);

  // binary search
  const [A, B] = nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];
  let [L, R] = [0, A.length - 1];

  while (true) {
    const midA = floor((L + R) / 2);
    const midB = mid - midA - 2;

    const [leftA, rightA] = [
      midA >= 0 ? A[midA] : NEGATIVE_INFINITY,
      midA + 1 < A.length ? A[midA + 1] : POSITIVE_INFINITY,
    ];
    const [leftB, rightB] = [
      midB >= 0 ? B[midB] : NEGATIVE_INFINITY,
      midB + 1 < B.length ? B[midB + 1] : POSITIVE_INFINITY,
    ];

    if (leftA > rightB) {
      R = midA - 1;

      continue;
    }

    if (leftB > rightA) {
      L = midA + 1;

      continue;
    }

    return total % 2
      ? // odd
        min(rightA, rightB)
      : // even
        (max(leftA, leftB) + min(rightA, rightB)) / 2;
  }
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
