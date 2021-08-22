class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        length = 0
        maxLen = 0
        start = 0
        sub = {}
        for i in range(len(s)):
            if (sub.get(s[i]) or sub.get(s[i]) == 0) and sub.get(s[i]) >= start :
                maxLen = length if maxLen < length else maxLen
                start = sub.get(s[i]) + 1
                length = i-start+1
            else:
                length += 1
            sub[s[i]] = i
        maxLen = len(s) - start if maxLen < len(s) - start else maxLen
        return maxLen
