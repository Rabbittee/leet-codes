class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        one = ["a","b","c"]
        ans = []
       
        def dfs(c, temp):
            if len(c) == n:
                ans.append(c)
                return ans
            for t in temp:
                newarr = [x for x in one if x != t]
                dfs(c+t, newarr)  
                
        dfs('', one)
        
        if k > len(ans) or len(ans) < 1:
            return ""

        return ans[k-1]