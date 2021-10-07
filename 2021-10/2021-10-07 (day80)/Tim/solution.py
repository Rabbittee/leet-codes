class Solution:
    def longestPalindrome(self, s: str) -> int:
        sav_s = {}
        for i in s:
            if i in sav_s:
                sav_s[i] += 1
            else:
                sav_s[i] = 1
        
        # refine the number
        sum_num = 0
        plus_one = 0
        for num in sav_s.values():
            if num%2:
                plus_one = 1
            sum_num += num//2*2
            
        return sum_num+plus_one
