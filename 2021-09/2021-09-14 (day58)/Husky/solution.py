# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow, fast = head, head
        inverse = None

        while fast and fast.next:
            temp = slow
            slow, fast = slow.next, fast.next.next

            temp.next = inverse
            inverse = temp

        if fast:
            slow = slow.next

        while slow:
            if slow.val != inverse.val:
                return False
            slow, inverse = slow.next, inverse.next
        return True
