# 解題想法
list轉字串，轉數字加1後再轉回list。

# leecode 提交結果
Runtime: 24 ms, faster than 97.31% of Python3 online submissions for Plus One.
Memory Usage: 14.4 MB, less than 14.67% of Python3 online submissions for Plus One.

# 迴圈解
```python
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:      
        temp = ''
        for i in digits:
            temp += str(i)   
        n = int(temp) + 1
        
        ans = []
        for c in str(n):
            ans.append(c)
        return ans
```
