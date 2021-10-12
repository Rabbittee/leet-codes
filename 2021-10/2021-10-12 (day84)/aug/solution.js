/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const total = arr.reduce((acc, cur) => acc + cur);
  if (total % 3) return false;

  const oneThird = total / 3;
  let sum = 0;
  let count = 0;

  for (const num of arr) {
    sum += num;
    if (sum === oneThird) {
      sum = 0;
      count++;
    }
  }

  return count >= 3;
};

/**
 * https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
 * 1013. Partition Array Into Three Parts With Equal Sum
 *
 * Runtime: 84 ms, faster than 80.90% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.
 * Memory Usage: 44.7 MB, less than 24.72% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.
 */
