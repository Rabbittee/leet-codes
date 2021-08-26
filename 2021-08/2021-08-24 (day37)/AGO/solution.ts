function maxProfit(prices: number[]): number {
  let profit = 0;
  let buyAt = -1;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      console.log(`${prices[i]} < ${prices[i + 1]} and buyat is ${buyAt}`);
      if (buyAt == -1) buyAt = prices[i];
    } else {
      if (buyAt != -1) {
        console.log(`sell stock at ${prices[i]} buy at ${buyAt}`);
        profit += prices[i] - buyAt;
        buyAt = -1;
      }
    }
  }
  return profit;
};