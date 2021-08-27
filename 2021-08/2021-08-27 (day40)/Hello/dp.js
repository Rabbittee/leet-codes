const { min } = Math;

/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
  const dp = [cost[0], cost[1]];

  for (let index = 2; index <= cost.length; index++) {
    const current = cost[index] || 0;

    dp[index] = current + min(dp[index - 2], dp[index - 1]);
  }

  return dp[cost.length];
}
