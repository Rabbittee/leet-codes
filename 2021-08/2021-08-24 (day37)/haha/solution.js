/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    prices.forEach((el, index) => {
        if (prices[index + 1]) {
            let transactions = prices[index + 1] - el
            if (transactions > 0) profit += transactions
        }
    })
    return profit
};