# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
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
