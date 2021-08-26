/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let profit = 0;

  for (let index = 1; index < prices.length; index++) {
    const diff = prices[index] - prices[index - 1];

    if (diff > 0) profit += diff;
  }

  return profit;
}
