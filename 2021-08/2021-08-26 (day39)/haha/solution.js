/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 2) return n
    let ratio = (1 + Math.sqrt(5)) / 2
    let ratioAlt = (1 - Math.sqrt(5)) / 2
    return (Math.pow(ratio, n + 1) - Math.pow(ratioAlt, n + 1)) / Math.sqrt(5)
};