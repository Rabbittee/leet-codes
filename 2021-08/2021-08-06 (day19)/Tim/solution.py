# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if len(lists)==1:
            return lists[0]
        
        # create a flags that saves lists' status
        # e.g. [[1,2,3],[],[2,5]], flags = [1,0,1]
        flags = [] 
        for l in lists:
            if l:
                flags.append(1)
            else:
                flags.append(0)
                
        # initialize ListNode
        tmp_result = ListNode([]) 
        
        # define fcn for recursion
        def mergeList(flags,tmp_lists,tmp_result):
            if sum(flags)==0:
                # all the flags are done!
                return tmp_result 
            
            # find the min val of all lists, save index i
            tmp_min = 1e10
            tmp_min_i = None
            for i in range(len(flags)):
                if flags[i]:
                    if tmp_lists[i].val<tmp_min:
                        tmp_min = tmp_lists[i].val
                        tmp_min_i = i
            
            # update tmp_result and tmp_list based on the index i
            tmp_result.next = tmp_lists[tmp_min_i]
            tmp_lists[tmp_min_i] = tmp_lists[tmp_min_i].next
            if tmp_lists[tmp_min_i] is None:
                # this node is over, also update flag value
                flags[tmp_min_i] = 0
                
            return mergeList(flags,tmp_lists,tmp_result.next)
        
        mergeList(flags,lists,tmp_result)
        return tmp_result.next
