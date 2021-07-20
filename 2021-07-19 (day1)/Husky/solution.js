/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let MAX = Math.pow(2, 31);
  if (x === 0) {
    return 0;
  }

  let ans = Math.abs(x)
    .toString()
    .split("")
    .map((_, i, x_) => x_[x_.length - 1 - i])
    .join("");

  ans = x > 0 ? ans - 0 : 0 - ans;

  return ans >= -MAX && ans < MAX ? ans : 0;
};
