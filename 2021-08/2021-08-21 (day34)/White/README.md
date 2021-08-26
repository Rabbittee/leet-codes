# 解題想法
從大到小排序list，傳回第k位。

# leecode 提交結果
Runtime: 60 ms, faster than 88.12% of Python3 online submissions for Kth Largest Element in an Array.
Memory Usage: 15.1 MB, less than 46.23% of Python3 online submissions for Kth Largest Element in an Array.

# code
```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        nums.sort(reverse=True)
        return nums[k-1]
```
