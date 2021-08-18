# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeList(self, l1, l2):
        answer = ListNode()
        temp = answer
        while l1 is not None and l2 is not None:
            if l1.val < l2.val:
                temp.next = l1
                l1 = l1.next
            else:
                temp.next = l2
                l2 = l2.next
            temp = temp.next

        if l1 is not None:
            temp.next = l1
        else:
            temp.next = l2
        return answer.next
    
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
    
        pre, slow, fast = head, head, head
        while fast and fast.next:
            pre = slow 
            slow = slow.next
            fast = fast.next.next
            
        pre.next = None
        l1 = self.sortList(head)
        l2 = self.sortList(slow)
        return self.mergeList(l1, l2)
        