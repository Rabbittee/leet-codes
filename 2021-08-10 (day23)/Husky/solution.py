# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
import math


class Solution:
    def isValidBST(self, root: Optional[TreeNode], min_=-1*math.inf, max_=math.inf) -> bool:
        if root is None:
            return True

        if root.val <= min_ or root.val >= max_:
            return False

        return self.isValidBST(root.left, min_, root.val) and self.isValidBST(root.right, root.val, max_)
