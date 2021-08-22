class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start = 0
        maxLen = 0
        for i in range(len(s)):
            try:
                start = s.index(s[i], start,i)+1
            except:
                if maxLen < i - start + 1:
                    maxLen = i - start + 1
                
        return maxLen
