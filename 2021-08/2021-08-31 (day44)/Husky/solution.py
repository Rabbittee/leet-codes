class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        pascal = [1, 1]
        if rowIndex < 1:
            return pascal[:rowIndex - 1]

        for i in range(1, rowIndex):
            for j in range(i, 0, -1):
                pascal[j] = pascal[j - 1] + pascal[j]

            pascal += [1]

        return pascal
