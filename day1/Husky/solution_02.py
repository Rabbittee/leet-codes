class Solution:
    def reverse(self, x: int) -> int:
        max_value = 2**31
        sign = x > 0
        x = abs(x)
        y = 0

        while(x != 0):
            y = y*10 + x % 10
            x = x//10

            if y < -max_value or y >= max_value:
                return 0

        return y if sign else -y
