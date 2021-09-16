class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if haystack == "":
            return 0 if needle == "" else -1
        
        k = len(needle)
        for i in range(len(haystack)):
            if i+k > len(haystack):
                break
            if haystack[i:i+k] ==  needle:
                return i
        return -1