# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def gen_tree(self, p, i):
        if len(p) == 0:
            return None

        root = p.pop(0)
        root_i = i.index(root)
        
        if root_i == 1:
            left_node = TreeNode(i[0])
        else:
            left_node = self.gen_tree(p[:root_i], i[:root_i])
            
        if len(p) - root_i == 1:
            right_node = TreeNode(i[root_i+1])
        else:
            right_node = self.gen_tree(p[root_i:], i[root_i+1:])
            
        return TreeNode(root, left_node, right_node)
        
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        # preorder: 中->左->右
        # inorder: 左->中->右
        return self.gen_tree(preorder, inorder)
