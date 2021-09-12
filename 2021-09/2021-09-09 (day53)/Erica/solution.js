/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    const num = BigInt(digits.join('')) + 1n
    return [...num.toString()].map(Number)
};
