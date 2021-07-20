class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or x > 2 ** 31 - 1:
            return False

        x_str = str(x)
        return x_str == x_str[::-1]
