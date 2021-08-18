/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  return n < 3 ? n === 1 : isPowerOfThree(n / 3);
}
