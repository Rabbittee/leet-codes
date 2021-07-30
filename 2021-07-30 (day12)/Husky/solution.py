# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        max_depth = 0
        def checkDepth(node, depth = 1):
            if node is None:
                return depth - 1

            left = depth if node.left is None else checkDepth(node.left, depth + 1)
            right = depth if node.right is None else checkDepth(node.right, depth + 1)

            return max(left, right)

        return checkDepth(root)