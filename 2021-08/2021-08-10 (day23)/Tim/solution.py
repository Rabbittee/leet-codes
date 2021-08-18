class Solution:        
        
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def expandTree(node,head,head_lr):
            if node is None:
                return True # no need to check
            
            head.append(node.val)
            head_left = head[:]
            head_left_lr = head_lr[:]
            head_right = head[:]
            head_right_lr = head_lr[:]
            if node.left:
                head_left_lr.append('L')
                for i in range(len(head_left)):
                    if head_left_lr[i]=='L':
                        if head_left[i]<=node.left.val:
                            return False
                    else:
                        if head_left[i]>=node.left.val:
                            return False   
                if not expandTree(node.left,head[:],head_left_lr):
                    return False
                
            if node.right:
                head_right_lr.append('R')
                for i in range(len(head_right)):
                    if head_right_lr[i]=='R':
                        if head_right[i]>=node.right.val:
                            return False
                    else:
                        if head_right[i]<=node.right.val:
                            return False
                if not expandTree(node.right,head[:],head_right_lr):
                    return False
                
            return True

        head = []
        head_lr = [] #left or right
        return expandTree(root,head,head_lr)
            
        
        
