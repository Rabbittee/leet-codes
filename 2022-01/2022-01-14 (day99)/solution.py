from typing import List


class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        dp = [[0 for item in row] for row in matrix]
        max_value = 0

        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if i + j == 0 or matrix[i][j] == '0':
                    dp[i][j] = int(matrix[i][j])
                else:
                    dp[i][j] = min(dp[i - 1][j], dp[i][j - 1],
                                   dp[i - 1][j - 1]) + 1
                if dp[i][j] > max_value:
                    max_value = dp[i][j]

        return max_value ** 2
