class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        
        min_tri = [[0]*len(layer) for layer in triangle]

        min_tri[0][0] = triangle[0][0]
        
        for i in range(1, len(triangle)):
            min_tri[i][0] = triangle[i][0] + min_tri[i - 1][0]
            min_tri[i][-1] = triangle[i][-1] + min_tri[i - 1][-1]
            
            for j in range(1, i):
                min_tri[i][j] = triangle[i][j] + min(min_tri[i - 1][j - 1], min_tri[i - 1][j])
                
        return min(min_tri[-1])
