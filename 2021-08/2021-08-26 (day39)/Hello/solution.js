/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n, dp = [undefined, 1, 2]) {
  dp[n] ||= climbStairs(n - 1, dp) + climbStairs(n - 2, dp);

  return dp[n];
}
