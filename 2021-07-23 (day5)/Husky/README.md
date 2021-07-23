```js
var searchInsert = function (nums, target) {
    let searchIndex = nums.indexOf(target)
    if (searchIndex > -1) {
        return searchIndex
    } else {
        nums.push(target)
        nums.sort((a, b) => a - b)
        return nums.indexOf(target)
    }
};
```

```python
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        def findIndex(start, end) -> int:
            if target < nums[start]:
                return start
            elif target > nums[end]:
                return end + 1

            half = (start + end) // 2
            if target > nums[half]:
                return findIndex(half + 1, end - 1)
            else:
                return findIndex(start + 1, half)

        try:
            search_index = nums.index(target)
            return search_index
        except:
            return findIndex(0, len(nums) - 1)
```

1. check was in list
2. using recursive and dichotomy method find boundary