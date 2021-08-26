class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:        
        a = {i:0 for i in range(1,n+1)}
        for i,j in trust:
            if i in a:
                del a[i] # not judge
            if j in a:    
                a[j] += 1 #possible judge

        if len(a.keys())==1:
            if a[list(a.keys())[0]]==n-1:
                return list(a.keys())[0]
        
        return -1
        
