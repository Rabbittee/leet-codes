# 解題想法
26進位，自個位數開始往前取餘數，轉換為文字後串接起來。

# leetcode 提交結果
Runtime: 46 ms, faster than 12.86% of Python3 online submissions for Excel Sheet Column Title.
Memory Usage: 14.2 MB, less than 70.43% of Python3 online submissions for Excel Sheet Column Title.

# solution 2. List
```python
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        n = columnNumber
        ans = []
        while n > 0:
            ans.append((n-1) % 26)       
            n = (n - 1) // 26
        
        rlt = ''
        for c in ans:
            print(c)
            rlt = chr(c + 65) + rlt
        return(rlt)    
```

# solution 2. leetcode 提交結果
Runtime: 33 ms, faster than 24.62% of Python3 online submissions for Excel Sheet Column Title.
Memory Usage: 14.1 MB, less than 89.99% of Python3 online submissions for Excel Sheet Column Title.