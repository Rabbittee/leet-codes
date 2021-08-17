class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 0:
            return False
        def calc(n):
            if n == 1:
                return True
            if n % 3:
                return False
            return calc(n//3)
        return calc(n)
