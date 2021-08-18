# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        count = 0
        def throughTheTree(count, node):
            if node is None:
                return count
            return max(throughTheTree(count+1, node.left), throughTheTree(count+1, node.right))
        return throughTheTree(count, root)
