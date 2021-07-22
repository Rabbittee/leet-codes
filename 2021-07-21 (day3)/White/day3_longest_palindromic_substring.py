# 純暴力法找出所有可能字串 再判斷是否回文，結果 Time Limit Exceeded
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if s.isalnum() and (1 <= len(s) <=1000):
            answer = ''
            for i in range(len(s)):
                for j in range(len(s)-i+1):
                    x = s[i:i+j]
                    if str(x) == ''.join(reversed(str(x))):
                        if len(x) > len(answer):
                            answer = x
        return answer