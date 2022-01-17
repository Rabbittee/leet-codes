class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if (len(s1) + len(s2)) != len(s3):
            return False
        
        dp = [[False for j in range(len(s2) + 1)] for i in range(len(s1) + 1)]
        
        dp[0][0] = True
        for i in range(1, len(s1) + 1):
            dp[i][0] = dp[i - 1][0] and s1[i - 1] == s3[i - 1]

        for j in range(1, len(s2) + 1):
            dp[0][j] = dp[0][j - 1] and s2[j - 1] == s3[j - 1]
        
        for i in range(1, len(s1) + 1):
            for j in range(1, len(s2) + 1):
                taget = s3[i + j - 1]
                
                dp[i][j] = (
                    dp[i - 1][j] and s1[i - 1] == taget or
                    dp[i][j - 1] and s2[j - 1] == taget
                )
        
        for row in dp:
            print(row)
            
        return dp[len(s1)][len(s2)]
