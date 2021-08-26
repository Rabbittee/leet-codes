CXPhoenix's Solutions
===

## 5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

---

## My Thought

- 看到本題，首先想到的是找到一樣的字母，並計算他們之間的距離。
- 但是後來發現竟然要找的是回文字串 (palindromic string)，因此在查詢重複字母的位置關係時，增加是否為回文的判斷。
- 所以看到以下 [solution1](./solution1.py) 的解法 

```python
class Solution:
    class Solution:
    def longestPalindrome(self, s: str) -> str:
        # the answer is the string itself when the string length is smaller than 2.
        if len(s) < 2:
            return s

        # Set the record of the largest length of between two indexs.
        maxLengthIndexs = [0,0]

        # Set the loop to check every single case until the last element in string.
        for i in range(len(s)-1):
            subString = self.getRepeatIndexs(s, i, len(s)-1)
            if maxLengthIndexs[1] - maxLengthIndexs[0] < subString[1] - subString[0]:
                maxLengthIndexs = [i for i in subString]
        
        return s[maxLengthIndexs[0]:maxLengthIndexs[1]+1]
    
    # Set the base case which meets the same as the target character to run recursives.
    def getRepeatIndexs(self, targetString: str, targetIndex:int, lastIndex:int) -> list:
        # I considered about if I got a string which the first letter is the same as the last letter but not palindromic string, it will drop the possible answer. So I add the palindromic checker in the condition.
        if targetString[targetIndex] == targetString[lastIndex] and self.checkPalindromic(targetString[targetIndex:lastIndex+1]):
            return [targetIndex, lastIndex]
        return self.getRepeatIndexs(targetString, targetIndex, lastIndex-1)
    
    # Checking the target string is the palndromic string or not.
    def checkPalindromic(self, target: str) -> bool:
        return target == target[::-1]
```

- 但是本次解題出來的速度極慢（見下圖），因此開始尋找第二種解法!

<img src="./solution1.png">

- 剛剛我是用從外到內去尋找最大可能存在的回文，那有沒有可能從內到外去尋找呢？
- 因此我開始嘗試從內擴展到外去尋找最大回文長度，由此找到了 [solution2](./solution2.py)

```python
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
```

- 藉由這個解法，果然在速度上有顯著的差異！

<img src="./solution2.png">

- 有沒有更快的解法呢？就看其他人的吧！

---

## Big-O
- solution1 -> O(n^2)
- solution2 -> 不會算..