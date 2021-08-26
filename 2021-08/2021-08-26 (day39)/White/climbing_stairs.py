class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2: 
            return n
        
        a, b, res = 1, 1, 2       
        for i in range(1, n-1):
            a, b = b, res
            res = a + b      
        return res
