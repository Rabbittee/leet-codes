class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        sub_max = 0
        sub_temp =''
        for char in s:
            if char in sub_temp:
                if sub_max < len(sub_temp):
                    sub_max = len(sub_temp)
                i = sub_temp.find(char)
                sub_temp = sub_temp[i+1:] + char
            else:
                sub_temp += char

        return sub_max if sub_max > len(sub_temp) else len(sub_temp)
