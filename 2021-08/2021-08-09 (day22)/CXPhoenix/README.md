CXPhoenix's Solution
===

## 148. Sort List

<p>Given the <code>head</code> of a linked list, return <em>the list after sorting it in <strong>ascending order</strong></em>.</p>

<p><strong>Follow up:</strong> Can you sort the linked list in <code>O(n logn)</code> time and <code>O(1)</code>&nbsp;memory (i.e. constant space)?</p>

---

## My Thoughts

- 跟之前的題目很像，所以我先用了舊方法。
- 見 [solution1](./solution1.py)

```python
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def bs(array, target, left, right):
            if left >= right:
                if target > array[left]:
                    return left + 1
                return left
            mid = (left + right) // 2
            if array[mid] == target:
                return mid
            if array[mid] < target:
                return bs(array, target, mid+1, right)
            if array[mid] > target:
                return bs(array, target, left, mid-1)
        if not head:
            return None
        sl = [head.val]
        head = head.next
        while head:
            sl.insert(bs(sl, head.val, 0, len(sl)-1), head.val)
            head = head.next
        sort = ListNode()
        cursor = sort
        while sl:
            cursor.val = sl.pop(0)
            cursor.next = ListNode() if len(sl) > 0 else None
            cursor = cursor.next
        return sort
```

<img src="./solution1.png">

---

## Big-O

O(n\*log n + n)