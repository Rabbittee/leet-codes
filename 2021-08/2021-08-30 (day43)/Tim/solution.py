class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        res = []
        base = [1]
        for n in range(1,numRows+1):
            new_base = []
            
            for i in range(n): 
                if i==0 or i==n-1: 
                    new_base.append(1)
                    continue
                new_base.append(base[i-1]+base[i])
            
            base = new_base
            res.append(base)
        return res
                
                
