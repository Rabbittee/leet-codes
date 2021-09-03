# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        hash = set()

        while headA is not None:
            hash.add(headA)
            headA = headA.next

        while headB is not None:
            if headB in hash:
                return headB
            headB = headB.next

        return None
