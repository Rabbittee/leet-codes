class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {}

        def recursion(n):
            if n <= 2:
                return n

            if n not in memo:
                memo[n] = recursion(n - 1) + recursion(n - 2)
            return memo[n]

        return recursion(n)
