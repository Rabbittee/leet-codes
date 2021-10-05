class Solution:
    
    def getHappyString(self, n: int, k: int) -> str:
        letters = ['a', 'b', 'c']
        res = letters[:]
        
        for i in range(1, n):
            res_ = []
            for letter in letters:
                res_ += [row + letter for row in res if row[-1] != letter]
            
            res = res_
        
        res.sort()
        return '' if k - 1 >= len(res) else res[k - 1]
