class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left, right, max_length = 0, 0, 0
        
        while right < len(s):          
            while s[right] in s[left:right]:
                left = left + 1

            right = right + 1
            max_length = max(max_length, right - left)

        return max_length