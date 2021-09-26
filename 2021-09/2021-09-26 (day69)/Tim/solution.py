class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        
        if len(triangle)==1:
            return triangle[0][0]
        
        for i in range(1,len(triangle)):
            for ii in range(len(triangle[i])):
                if ii==0:
                    triangle[i][ii] += triangle[i-1][ii] # left boundary
                elif ii==len(triangle[i])-1:
                    triangle[i][ii] += triangle[i-1][ii-1] # right boundary
                else:
                    triangle[i][ii] += min(triangle[i-1][ii-1],triangle[i-1][ii])
                
        return min(triangle[-1])
