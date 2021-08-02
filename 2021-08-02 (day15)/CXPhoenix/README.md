CXPhoenix's solution
===

## 21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a *sorted* list. The list should be made by splicing together the nodes of the first two lists.

---

## My Thoughts

- 今日的題目就只是從一個 `linked list` 走訪變成兩個要交叉走訪。
- 誰小誰就往下走，並把直可以合進一個新的 `linked list` 中，並且讓這個 `linked list` 也繼續往下走。
- 不囉唆直接上 code

[solution1](./solution1.py)

```python
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1 and not l2:
            return None
        if not l1:
            return l2
        if not l2:
            return l1
        
        c1 = l1
        c2 = l2
        merged = ListNode(None)
        m1 = merged
        while c1 or c2:
            if not c1:
                m1.next = c2
                break
            if not c2:
                m1.next = c1
                break
                
            if c1.val <= c2.val:
                m1.next=c1
                c1 = c1.next
            else:
                m1.next=c2
                c2 = c2.next
            m1 = m1.next
            
        
        return merged.next
```

<img src="./solution1.png">

[solution2](./solution2.py)

```python
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1 and not l2:
            return None
        if not l1:
            return l2
        if not l2:
            return l1
        
        c1 = l1
        c2 = l2
        merged = ListNode(None)
        m1 = merged
        def merging(m, mc, list1, list2):
            if not list1 and not list2:
                return m
            if not list1:
                mc.next = list2
                return m
            if not list2:
                mc.next = list1
                return m
            if list1.val <= list2.val:
                mc.next = list1
                return merging(m, mc.next, list1.next, list2)
            if list1.val > list2.val:
                mc.next = list2
                return merging(m, mc.next, list1, list2.next)
        return merging(merged, m1, c1, c2).next
```

<img src="./solution2.png">

---

## Big-O

O(n+m)