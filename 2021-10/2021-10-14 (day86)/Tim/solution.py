class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        
        def get_path(node,cur,res):            
            cur += "->%d"%(node.val)
            if node.left==None and node.right==None:
                res.append(cur[2:])
                return
            if node.left:
                get_path(node.left,cur,res)
            if node.right:
                get_path(node.right,cur,res)
                
        res = []
        get_path(root,"",res)
        return res
