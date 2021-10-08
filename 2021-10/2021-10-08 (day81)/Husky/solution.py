class Solution:
    def balancedStringSplit(self, s: str) -> int:
        
        counter = 0
        res = 0
        for char in s:
            counter += (1 if char == 'R' else -1)
            if counter == 0:
                res += 1
                
        return res
