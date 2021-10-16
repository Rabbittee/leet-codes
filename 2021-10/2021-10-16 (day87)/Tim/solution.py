class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def get_leaf(node,res):
            if node==None:
                return
            if node.left==None and node.right==None:
                res.append(node.val)
            get_leaf(node.left,res)
            get_leaf(node.right,res)
        
        res1 = []
        get_leaf(root1,res1)
        
        res2 = []
        get_leaf(root2,res2)
        
        if len(res1)!=len(res2):
            return False
        
        for i,r1 in enumerate(res1):
            if r1 != res2[i]:
                return False
            
        return True
