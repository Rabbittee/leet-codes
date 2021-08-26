# leetcode
Runtime: 43 ms, faster than 6.96% of Python3 online submissions for Climbing Stairs.
Memory Usage: 14.3 MB, less than 44.80% of Python3 online submissions for Climbing Stairs.

# fibonacci
https://en.wikipedia.org/wiki/Fibonacci_number

# 數學公式解
```python
from math import sqrt
class Solution:
    def climbStairs(self, n: int) -> int:
        n = n + 1
        return math.floor(((1+sqrt(5))**n-(1-sqrt(5))**n)/(2**n*sqrt(5)))
```