/**
 * @param {number[]} coins
 * @param {number} amount
 */
function coinChange(coins, amount) {
  const upperLimit = amount + 1;
  const dp = Array(upperLimit).fill(upperLimit);
  dp[0] = 0;

  coins.forEach((coin) => {
    for (let i = coin; i < upperLimit; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  });
  return dp[amount] === upperLimit ? -1 : dp[amount];
}
