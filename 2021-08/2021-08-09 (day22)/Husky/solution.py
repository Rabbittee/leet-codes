class Solution:
    def merge(self, l1:ListNode, l2:ListNode) ->ListNode:
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

    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return head
        temp = []
        while head:
            temp.append(ListNode(head.val))
            head = head.next

        while len(temp) > 1:
            temp_ = []
            for i in range(0, len(temp), 2):
                temp_.append(self.merge(temp[i], temp[i+1] if i + 1 < len(temp) else None))
            temp = temp_

        return temp[0]