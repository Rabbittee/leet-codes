class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[1 if j == 0 or i == 0 else 0 for i in range(n)] for j in range(m)]
        
        for j in range(1, m):
            for i in range(1, n):
                dp[j][i] = dp[j - 1][i] + dp[j][i - 1]
        
        return dp[-1][-1]
