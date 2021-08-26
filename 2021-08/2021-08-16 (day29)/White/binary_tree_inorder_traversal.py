# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return root
        
        def inLDR(self):
            if self.left:
                inLDR(self.left)
            ldr_list.append(self.val)
            if self.right:
                inLDR(self.right)

        ldr_list = []
        inLDR(root)

        return ldr_list