# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []

        leftTree = self.inorderTraversal(root.left)
        rightTree = self.inorderTraversal(root.right)

        return leftTree + [root.val] + rightTree