class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])

        result = [[0]*n for row in grid]

        for y in range(m):
            for x in range(n):
                if x == 0 and y == 0:
                    result[y][x] = grid[y][x]
                    continue

                up = result[y - 1][x] if y > 0 else float("inf")
                left = result[y][x - 1] if x > 0 else float("inf")

                result[y][x] = min(up, left) + grid[y][x]

        return result[-1][-1]