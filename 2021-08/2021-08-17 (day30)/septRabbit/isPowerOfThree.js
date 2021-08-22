var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  if (n % 3 === 0) return isPowerOfThree(n / 3);
  return false;
};

var isPowerOfThree = function (n) {
  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

  const power = getBaseLog(3, n);

  //Because result of getBaseLog(3, n) is not integer, so we need to multiply by very big number
  //and remove the remaning decimal and divivded by that number. If it is an integer, that means
  if (Number.isInteger(Math.floor(power * 10000000000) / 10000000000))
    return true;
  else return false;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(18));
console.log(isPowerOfThree(1594324));
