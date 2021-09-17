class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        table = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        
        res = []
        while columnNumber>0:
            rem = (columnNumber-1) % 26
            res.append(table[rem])
            columnNumber = (columnNumber-1)//26
            
        return ''.join(res[::-1])
            
