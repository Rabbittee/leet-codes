# 解題想法
1. 依昨天妖精分享的：計算list應有總和，減去目前總和，差值即為答案。
2. 利用梯形公式計算總和。

# leecode 提交結果
Runtime: 124 ms, faster than 89.20% of Python3 online submissions for Missing Number.
Memory Usage: 15.4 MB, less than 49.03% of Python3 online submissions for Missing Number.

# code
```python
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        return int(((1 + len(nums))* ((len(nums))/ 2)) - sum(nums))
```

# 補充
計算總和改用老酥和Tim使用的 sum(range(len(nums)+1)) 效能較佳