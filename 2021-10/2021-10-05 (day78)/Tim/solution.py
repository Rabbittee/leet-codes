class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        
        if len(s)==0:
            return 0
        
        g.sort()
        s.sort()

        num = 0
        j = 0
        for ig in g:
            while j<len(s):
                if ig <= s[j]:
                    num += 1
                    j += 1
                    break
                j += 1
            else:
                break
                
        return num
            
