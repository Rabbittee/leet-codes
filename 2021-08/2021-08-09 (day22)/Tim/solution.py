# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        res = []
        while head:
            res.append(head.val)
            head = head.next
        
        res.sort()

        tmp = ans = ListNode()
        for i in res:
            tmp.next = ListNode(i)
            tmp = tmp.next
            
        return ans.next
