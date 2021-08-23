/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let min = Infinity;
  let profit = 0;

  for (const price of prices) {
    if (min > price) min = price;

    if (price - min > profit) profit = price - min;
  }

  return profit;
}
