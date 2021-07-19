class Solution:
    def reverse(self, x: int) -> int:
        max_value = 2**31

        reversed_str = str(x)[::-1]
        try:
            reversed_num = int(reversed_str)
        except:
            reversed_num = -int(reversed_str[:-1])

        return reversed_num if -max_value <= reversed_num <= max_value - 1 else 0
