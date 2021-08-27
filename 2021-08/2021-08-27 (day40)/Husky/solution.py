class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        dp = [0]*(len(cost)+1)

        if len(cost) > 2:
            for i in range(2, len(cost)+1):
                dp[i] = min(dp[i-2] + cost[i-2], dp[i-1] + cost[i-1])
        else:
            dp[2] = min(cost[0], cost[1])

        return dp[-1]
