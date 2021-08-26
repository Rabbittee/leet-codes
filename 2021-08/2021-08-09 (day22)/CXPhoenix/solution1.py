# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
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
