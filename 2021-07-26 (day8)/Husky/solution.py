class Solution:
    def romanToInt(self, s: str) -> int:
        conversion_table = {
            'I': 1, 'V': 5,
            'X': 10, 'L': 50,
            'C': 100, 'D': 500,
            'M': 1000
        }

        nums = [conversion_table[s[0]]]
        for char in s[1:]:
            num = conversion_table[char]
            if num > nums[-1]:
                nums = nums[:-1] + [-nums[-1], num]
            else:
                nums += [num]

        return sum(nums)
