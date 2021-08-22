/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const MAX = 2 ** 31;

  if (x < 0 || x > MAX - 1) {
    return false;
  }

  const xStr = x.toString();
  return xStr
    .split("")
    .slice(0, parseInt(xStr.length / 2))
    .every((v, i) => v === xStr[xStr.length - 1 - i]);
};
