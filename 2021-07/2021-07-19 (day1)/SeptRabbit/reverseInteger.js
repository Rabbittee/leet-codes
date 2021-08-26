/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = x.toString();
  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(-2, 31);

  if ((x = 0)) return 0;

  let newNum = [];
  let n = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    if (num > 0) {
      newNum = [...newNum, num[i]];
      n = newNum.join("");
    } else {
      newNum = [...newNum, num[i + 1]];
      n = "-" + newNum.join("");
    }
  }

  if (n < min || n > max) return 0;
  return n;
};
console.log(reverse(125));
console.log(reverse(-123));
console.log(reverse(1));
console.log(reverse(325));
console.log(reverse(-320));
console.log(reverse(-1534236469));
console.log(reverse(1534236469));
