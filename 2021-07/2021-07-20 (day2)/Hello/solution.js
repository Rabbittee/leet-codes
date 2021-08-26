/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  return String(x) === Array.from(String(x)).reverse().join("");
}
