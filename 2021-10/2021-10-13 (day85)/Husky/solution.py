# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.res = 0
        
    def dfs(self, node):
        if node.left and node.left.left is None and node.left.right is None:
            self.res += node.left.val
        
        if node.left:
            self.dfs(node.left)
            
        if node.right:
            self.dfs(node.right)

    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        self.dfs(root)
        return self.res
    
