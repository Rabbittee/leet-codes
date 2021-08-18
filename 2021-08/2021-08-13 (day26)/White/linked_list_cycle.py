# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        if head is None:
            return False

        slow, fast = head, head

        while(slow and fast):
            if(fast.next is None):
                return False
            slow = slow.next
            fast = fast.next.next
            if(slow == fast):
                return True
        return False
