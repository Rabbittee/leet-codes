CXPhoenix's solution
===

## 35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

---

## My Thoughts

If we want to solve in O(log n) time, we must use binary search to find insert.
To use binary search, we need to move left or right bound to the middle of rest array.
like `left = (left+right) / 2` or `right= (left+right) / 2`

And the condition of stop the loop if `left > right` or `loop time touch the end of string`

Than we return `left position +1` if target > nums[left] else return `left position`