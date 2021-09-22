/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (num) {
  return Array(num + 1)
    .fill(0)
    .map((n, i) => i.toString(2).match(/1/g)?.length || 0)
}
