# 解題想法
迴圈不斷除3，除到最後商數為1者為True。

# leecode 提交結果
Runtime: 60 ms, faster than 97.47% of Python3 online submissions for Power of Three.
Memory Usage: 14.2 MB, less than 77.04% of Python3 online submissions for Power of Three.

# 迴圈解
```python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        while n % 3 == 0 and n != 0:
            n = n / 3
        return True if n ==1 else False
```

# 數字解
```python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        return n > 0 and 1162261467 % n == 0
```
