class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        step = 1
        currs = [(0, 0)]

        sum_t = [[0]*n for row in grid]

        while(step < (m + n)):
            step += 1
            n_currs = set()

            for curr in currs:
                c_x, c_y = curr
                sum_t[c_y][c_x] += grid[c_y][c_x]
                value = sum_t[c_y][c_x]

                if c_x < n - 1:
                    right = sum_t[c_y][c_x + 1]
                    n_currs.add((c_x + 1, c_y))
                    if sum_t[c_y][c_x + 1] == 0:
                        sum_t[c_y][c_x + 1] = value
                    elif sum_t[c_y][c_x + 1] > value:
                        sum_t[c_y][c_x + 1] = value

                if c_y < m - 1:
                    down = sum_t[c_y + 1][c_x]
                    n_currs.add((c_x, c_y + 1))
                    if sum_t[c_y + 1][c_x] == 0:
                        sum_t[c_y + 1][c_x] = value
                    elif sum_t[c_y + 1][c_x] > value:
                        sum_t[c_y + 1][c_x] = value

            currs = list(n_currs)
        return sum_t[m - 1][n - 1]