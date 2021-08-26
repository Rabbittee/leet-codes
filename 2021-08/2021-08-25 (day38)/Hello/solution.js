const { max, min } = Math;

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let firstSell = 0;
  let firstBuy = Infinity;

  let secondSell = 0;
  let secondBuy = Infinity;

  for (const price of prices) {
    firstBuy = min(firstBuy, price);
    firstSell = max(firstSell, price - firstBuy);

    secondBuy = min(secondBuy, price - firstSell);
    secondSell = max(secondSell, price - secondBuy);
  }

  return secondSell;
}
