class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        ans = ''
        while columnNumber > 0:
            digit = (columnNumber - 1) % 26
            ans = chr(digit + 65) + ans
            columnNumber = (columnNumber - digit) // 26
        return(ans)
            