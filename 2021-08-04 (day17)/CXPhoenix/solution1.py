# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        sumList = ListNode()
        cursor = sumList
        over9 = 0
        while l1 or l2:
            print(f'{cursor}\n{l1}\n{l2}')
            if not l1:
                cursor.val += l2.val+over9
                if cursor.val > 9:
                    cursor.val %= 10
                    over9 = 1
                else:
                    over9 = 0
                l2 = l2.next
                if l2:
                    cursor.next = ListNode()
                else:
                    cursor.next = ListNode(over9) if over9 else None
                cursor = cursor.next
                continue
            if not l2:
                cursor.val += l1.val+over9
                if cursor.val > 9:
                    cursor.val %= 10
                    over9 = 1
                else:
                    over9 = 0
                l1 = l1.next
                if l1:
                    cursor.next = ListNode()
                else:
                    cursor.next = ListNode(over9) if over9 else None
                cursor = cursor.next
                continue
            
            cursor.val += l1.val + l2.val + over9
            if cursor.val > 9:
                cursor.val %= 10
                over9 = 1
            else:
                over9 = 0
            l1 = l1.next
            l2 = l2.next
            if l1 or l2:
                cursor.next = ListNode()
            else:
                cursor.next = ListNode(over9) if over9 else None
            cursor = cursor.next
            
        return sumList
