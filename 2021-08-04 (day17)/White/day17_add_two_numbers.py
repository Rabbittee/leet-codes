# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        carry = 0
        answer = ListNode()
        inx = answer
        while l1 is not None or l2 is not None:
            x = l1.val if l1 else 0
            y = l2.val if l2 else 0
            num = x + y + carry
            if num >= 10:
                inx.next = ListNode(num % 10)
                carry = num // 10
            else:
                inx.next = ListNode(num)
                carry = 0
                     
            if l1 is not None:
                l1 = l1.next               
            if l2 is not None:
                l2 = l2.next
            inx = inx.next
            
        if carry > 0:
            inx.next = ListNode(carry)
        
        return answer.next
