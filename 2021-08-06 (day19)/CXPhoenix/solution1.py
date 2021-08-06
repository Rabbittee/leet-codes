# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        merged = ListNode(None)
        cursor = merged
        mergedList = []
        
        def bs(theList, target, start, end):
            mid = (start+end)//2
            if target == theList[mid]:
                return mid
            if start >= end:
                if theList[start] < target:
                    return start+1
                return start 
            if target > theList[mid]:
                return bs(theList, target, mid+1, end)
            if target < theList[mid]:
                return bs(theList, target, start, mid-1)
        
        if not lists:
            return None
        
        for linkList in lists:
            while linkList:
                if not mergedList:
                    mergedList.append(linkList.val)
                    linkList = linkList.next
                    continue
                index = bs(mergedList, linkList.val, 0, len(mergedList)-1)
                mergedList.insert(index, linkList.val)
                linkList = linkList.next
        
        if not mergedList:
            return None
        
        for i in range(len(mergedList)):
            cursor.val = mergedList[i]
            if i+1 <= len(mergedList)-1:
                cursor.next = ListNode()
            cursor = cursor.next
        
        return merged
