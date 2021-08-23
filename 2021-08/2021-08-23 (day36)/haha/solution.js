/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0]
    let max = 0
    prices.forEach(el => {
        if (el < min) min = el
        if (el - min > max) max = el - min
    })
    return max
};