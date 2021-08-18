# 解題想法
先計算出各數字的出現次數，再傳回次數為1者。

# leecode 提交結果
Runtime: 128 ms, faster than 83.84% of Python3 online submissions for Single Number.
Memory Usage: 16.7 MB, less than 19.84% of Python3 online submissions for Single Number.

# code
```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:   
        arr = {}
        for i in nums:
            if i in arr.keys():
                arr[i] = arr[i] + 1
            else:
                arr[i] = 1
        
        res = [key for key, val in arr.items() if val == 1]
        return res[0]
```
