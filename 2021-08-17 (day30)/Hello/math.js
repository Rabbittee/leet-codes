/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  return n > 0 && 3 ** 19 % n === 0;
}
