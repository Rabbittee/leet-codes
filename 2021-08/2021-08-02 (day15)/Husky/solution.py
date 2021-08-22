# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 is None:
            return l2
        if l2 is None:
            return l1

        head = ListNode()
        output = head
        while(l1 is not None or l2 is not None):
            if l1 is None:
                head.val = l2.val
                head.next = l2.next
                return output
            elif l2 is None:
                head.val = l1.val
                head.next = l1.next
                return output

            if l1.val < l2.val:
                head.val = l1.val
                l1 = l1.next
            else:
                head.val = l2.val
                l2 = l2.next
            head.next = ListNode()
            head = head.next

        return output