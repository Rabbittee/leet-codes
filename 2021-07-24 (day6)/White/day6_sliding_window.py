class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        right = 1
        max_length = 0
        
        while len(s) >= right > left:
            if len(s[left:right]) == len(set(s[left:right])):
                if len(s[left:right]) > max_length:
                    max_length = len(s[left:right])
                right = right + 1
            else:
                left = left + 1
        return max_length