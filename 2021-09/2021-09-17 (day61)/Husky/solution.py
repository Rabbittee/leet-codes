class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        title = ''
        while columnNumber > 0:
            temp = columnNumber % 26
            if temp == 0:
                temp = 26
            title = chars[temp - 1] + title
            columnNumber = (columnNumber - temp)//26

        return title
