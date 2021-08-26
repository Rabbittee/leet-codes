class Solution:
    def firstUniqChar(self, s: str) -> int:
        m = {}
        for char in s:
            if char not in m:
                m[char] = 1
            else:
                m[char] = -1

        for i in range(len(s)):
            char = s[i]
            if m[char] == 1:
                return i
        return -1