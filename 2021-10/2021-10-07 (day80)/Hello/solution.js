const { max } = Math;
const { values } = Object;

/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  const table = {};

  for (const char of s) {
    if (!(char in table)) table[char] = 0;

    table[char] += 1;
  }

  let center = 0;
  let sum = 0;

  for (const value of values(table)) {
    if (value % 2 === 0) {
      sum += value;
    } else {
      sum += value - 1;

      center = 1;
    }
  }

  return sum + center;
}
