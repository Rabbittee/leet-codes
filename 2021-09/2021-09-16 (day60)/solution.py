class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        n, m = len(needle), len(haystack)
        if n == 0:
            return 0

        for i in range(m - n + 1):
            if haystack[i: i + n] == needle:
                return i
            
        return -1
