class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        self.res = 0
        def get_val(node):
            if node:
                if node.left and node.left.left==None and node.left.right==None:
                    self.res += node.left.val        
                get_val(node.left)
                get_val(node.right)
                
        get_val(root)
        return self.res
