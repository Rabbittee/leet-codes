class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        for t_ in t:
            if s == '':
                return True
            
            if t_ == s[0]:
                s = s[1:]
        
        return s == ''
