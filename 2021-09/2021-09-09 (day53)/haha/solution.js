/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let sum = (BigInt(digits.join('')) + 1n).toString()
    return [...sum].map(Number)
};