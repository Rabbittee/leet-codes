/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    const reverse = x.toString().split("").reverse();

    if (Number(reverse.join("")) > 2 ** 31 - 1) return false;

    const origin = x.toString().split("");

    return origin.find((y, i, _x) => _x[i] !== reverse[i]) === undefined
        ? true
        : false;
};
