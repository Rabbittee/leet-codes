class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        
        memo = {}
        def set_move(m,n):
            if m==1 or n==1:
                return 1
            if (m,n) in memo:
                return memo[(m,n)]

            memo[(m,n)] = set_move(m-1,n) + set_move(m,n-1)
            return memo[(m,n)]
            
            
        return set_move(m,n)
        
