# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        paths = [[root]]
        
        while True:
            paths_ = []

            over = True
            for path in paths:
                if path[-1].left is None and path[-1].right is None:
                    paths_.append(path)
                    continue

                over = False
                if path[-1].left:
                    paths_.append(path + [path[-1].left])
                if path[-1].right:
                    paths_.append(path + [path[-1].right])    
            
            paths = paths_
            if over:
                break
        
        
        paths = ['->'.join([str(item.val) for item in path]) for path in paths]
        return paths
