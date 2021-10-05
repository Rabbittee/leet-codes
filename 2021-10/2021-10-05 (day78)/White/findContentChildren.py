class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        if len(s) == 0:
            return 0
        
        g.sort()
        s.sort()
        ans = 0
        
        for cookie in s:
            if cookie >= g[ans]:
                ans += 1
            if ans >= len(g):
                break
        return ans