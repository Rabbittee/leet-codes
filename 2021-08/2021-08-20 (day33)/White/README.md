# 解題想法
排序後依序比較，遇到重覆就傳回值。

# leecode 提交結果
Runtime: 660 ms, faster than 33.19% of Python3 online submissions for Find the Duplicate Number.
Memory Usage: 28.1 MB, less than 51.92% of Python3 online submissions for Find the Duplicate Number.

# code
```python
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        nums.sort()
        i = 0
        for j in range(1, len(nums)):
            if nums[i] == nums[j]:
                return nums[i]
            i += 1
```

# Big O
O(n)