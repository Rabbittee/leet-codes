/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canThreePartsEqualSum(arr) {
  const part = arr.reduce((a, b) => a + b, 0) / 3;

  let sum = 0;
  let count = 0;

  for (const num of arr) {
    sum += num;

    if (sum === part) {
      sum = 0;
      count += 1;
    }
  }

  return count >= 3;
}
