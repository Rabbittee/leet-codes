# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        nodes = ''
        while head.next is not None:
            nodes = nodes + str(head.val)
            head = head.next
        nodes = nodes + str(head.val)
        return nodes == nodes[::-1]