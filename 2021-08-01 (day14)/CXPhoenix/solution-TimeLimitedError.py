class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        row = 0
        col = 0
        record = 0
        def goThrough(grid, row, col, record, maxRow=len(grid)-1, maxCol=len(grid[0])-1):
            if row == maxRow and col == maxCol:
                return record+grid[row][col]
            if row > maxRow or col > maxCol:
                return float("inf")
            return min(goThrough(grid, row+1, col, record+grid[row][col]), goThrough(grid, row, col+1, record+grid[row][col]))
        return goThrough(grid, row, col, record)
