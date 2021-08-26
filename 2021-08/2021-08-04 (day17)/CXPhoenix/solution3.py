# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        sumList = ListNode()
        c = sumList
        while l1 or l2:
            if not l1:
                c.val += l2.val
                l2 = l2.next
            elif not l2:
                c.val += l1.val
                l1 = l1.next
            else:
                c.val += l1.val + l2.val
                l1 = l1.next
                l2 = l2.next
            
            if c.val > 9:
                c.next = ListNode(1)
                c.val %= 10
            else:
                c.next = ListNode() if l1 or l2 else None
            c = c.next
        return sumList
