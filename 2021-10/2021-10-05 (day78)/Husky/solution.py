class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        
        res = 0
        i = 0
        for g_ in g:
            while i < len(s) and s[i] < g_:
                i += 1
            if i < len(s) and s[i] >= g_:
                i += 1
                res += 1
        
        return res
