# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def checkSame(self, left, right) -> bool:
        if left is None and right is None:
            return True
        elif left is None or right is None:
            return False

        return left.val == right.val \
            and self.checkSame(left.left, right.right) \
            and self.checkSame(left.right, right.left)

    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        return self.checkSame(root.left, root.right)
