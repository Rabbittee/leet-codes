class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        DP = [[0]*len(grid[0])]*len(grid)
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if r - 1 >= 0 and c - 1 >= 0:
                    DP[r][c] = min(DP[r-1][c]+grid[r][c], DP[r][c-1]+grid[r][c])
                elif r - 1 >= 0:
                    DP[r][c] = DP[r-1][c] + grid[r][c]
                elif c - 1 >= 0:
                    DP[r][c] = DP[r][c-1] + grid[r][c]
                else:
                    DP[r][c] = grid[r][c]
        return DP[len(grid)-1][len(grid[0])-1]
