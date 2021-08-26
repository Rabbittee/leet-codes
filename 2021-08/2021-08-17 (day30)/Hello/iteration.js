/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  while (n >= 3) {
    n /= 3;
  }

  return n === 1;
}
