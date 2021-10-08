class Solution:
    def longestPalindrome(self, s):
        cdict = {}
        ans = 0
        
        for c in s:
            if c not in cdict:
                cdict[c] = 1
            else:
                cdict[c] += 1
                
        for k,v in cdict.items():            
            ans += v // 2 * 2         
            if ans % 2 == 0 and v % 2 == 1:
                ans += 1
                
        return ans