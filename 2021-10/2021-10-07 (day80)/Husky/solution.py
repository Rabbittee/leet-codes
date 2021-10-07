class Solution:
    def longestPalindrome(self, s: str) -> int:
        counter = {}
        for s_ in s:
            if s_ in counter:
                counter[s_] += 1
            else:
                counter[s_] = 1
        
        res = 0
        odd = False
        for count in counter.values():
            mod = count % 2
            if mod == 0:
                res += count
            else:
                res += count - 1
                if not odd:
                    odd = True
        
        return res + (1 if odd else 0)
