# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def merge2List(self, l1: ListNode, l2: ListNode) -> ListNode:
        head = ListNode()
        output = head
        while l1 and l2:
            if l1.val <= l2.val:
                head.next = l1
                l1 = l1.next
            else:
                head.next = l2
                l2 = l2.next
            head = head.next

        head.next = l1 if l1 else l2
        return output.next

    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if not lists or len(lists) == 0:
            return None

        while(len(lists) > 1):
            lists_ = []
            for i in range(0, len(lists), 2):
                lists_.append(self.merge2List(lists[i],lists[i+1] if i + 1 < len(lists) else None) )
            lists = lists_
        return lists[0]