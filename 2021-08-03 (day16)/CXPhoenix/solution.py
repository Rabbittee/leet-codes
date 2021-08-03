class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        for col in range(n):
            tmp = []
            for row in range(n):
                tmp.append(matrix[n-1-row][col])
            matrix.append(tmp)
        del(matrix[:n])
