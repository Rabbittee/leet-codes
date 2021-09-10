class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:      
        temp = "".join([str(x) for x in digits])       
        n = int(temp) + 1
        
        return list(str(n))