class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        output = [[1], [1, 1]]

        for i in range(2, numRows):
            curr = [1] + \
                [output[-1][j - 1] + output[-1][j] for j in range(1, i)] + \
                [1]
            output.append(curr)

        return output[:numRows]
