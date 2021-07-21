class Solution:
    def longestPalindrome(self, s: str) -> str:
        # In sure when string's length is 1 to return itself.
        if len(s) == 1:
            return s
        maxLen = 0
        maxPalin = ''
        # Checking every single element is palindromic string or not by using expend function.
        for i in range(len(s)-1):
            # There's two possible: the palindromic string's length is odd number or is even number.
            # So we need to check which is larger length
            cur = max(self.expend(s, i, i, maxLen), self.expend(s, i, i+1, maxLen))
            if cur > maxLen:
                maxLen = cur
                # The maxPalin is different between maxLen is odd number or is even number.
                if not maxLen % 2:
                    maxPalin = s[i-maxLen//2+1:i+maxLen//2+1]
                else:
                    maxPalin = s[i-maxLen//2: i+maxLen//2+1]
        return maxPalin
        
    # In this case, we got two pointer to point left and right border.
    # As we know, if the left character is the same as the right, it's the palindromic string.
    # So we need to find the largest palindromic string by expend the left and right borders.
    # And Why do we need to add now Max?
    # It's because if the boundary can make the largest palindromic string is smaller than now max length, we don't need to run the program because there's no way to larger than max length.
    def expend(self, s: str, l: int, r:int, nowMax: int) -> int:
        if nowMax < l*2+1 if l<=r else (len(s)-r)*2+1:
            while l>=0 and r < len(s):
                if s[l] == s[r]:
                    l-=1
                    r+=1
                else:
                    break
            return r-l-1
        return -1
