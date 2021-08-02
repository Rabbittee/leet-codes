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
        def merging(m, mc, list1, list2):
            if not list1 and not list2:
                return m
            if not list1:
                mc.next = list2
                return m
            if not list2:
                mc.next = list1
                return m
            if list1.val <= list2.val:
                mc.next = list1
                return merging(m, mc.next, list1.next, list2)
            if list1.val > list2.val:
                mc.next = list2
                return merging(m, mc.next, list1, list2.next)
        return merging(merged, m1, c1, c2).next
