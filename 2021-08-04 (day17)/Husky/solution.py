# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        temp = 0
        head = ListNode()
        output = head
        while(l1 is not None or l2 is not None):
            value = (0 if l1 is None else l1.val) + (0 if l2 is None else l2.val) + temp
            temp = value//10
            if value >= 10:
                value = value % 10

            head.next = ListNode(value)
            head = head.next

            if l1 is not None:
                l1 = l1.next
            if l2 is not None:
                l2= l2.next

        if temp > 0:
            head.next = ListNode(temp)
        return output.next