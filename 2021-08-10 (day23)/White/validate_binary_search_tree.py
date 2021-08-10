# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def inLDR(self):
            if self.left:
                inLDR(self.left)
            ldr_list.append(self.val)
            if self.right:
                inLDR(self.right)

        ldr_list = []
        inLDR(root)

        return ldr_list == sorted(set(ldr_list))


Runtime: 44 ms, faster than 69.67 % of Python3 online submissions for Validate Binary Search Tree.
Memory Usage: 17.8 MB, less than 7.19 % of Python3 online
