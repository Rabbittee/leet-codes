/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
  let balance = 0;
  let result = 0;

  for (const char of s) {
    if (char === "R") {
      balance += 1;
    }
    if (char === "L") {
      balance -= 1;
    }
    if (balance === 0) {
      result += 1;
    }
  }

  return result;
}
