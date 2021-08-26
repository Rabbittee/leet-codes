/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let [minPointer, profit] = [0, 0];
    prices.forEach((each, index) => {
        if (each - prices[minPointer] > profit) {
            profit = each - prices[minPointer];
        }
        if (each < prices[minPointer]) {
            minPointer = index;
        }
    });
    return profit;
};
