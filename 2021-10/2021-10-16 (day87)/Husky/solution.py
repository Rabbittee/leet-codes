# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        
        def dfs(node, leaves):
            if node.left is None and node.right is None:
                leaves.append(node.val)
                return
            
            if node.left:
                dfs(node.left, leaves)
                
            if node.right:
                dfs(node.right, leaves)
        
        leaves1 = []
        dfs(root1, leaves1)
        
        leaves2 = []
        dfs(root2, leaves2)
        
        if len(leaves1) != len(leaves2):
            return False
        
        for i in range(len(leaves1)):
            if leaves1[i] != leaves2[i]:
                return False
        
        return True
