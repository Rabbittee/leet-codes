class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
    
        # BFS
        if root is None:
            return True
        
        flipLR = {'L':'R','R':'L','M':'M'}
        
        #elems = [root.val]
        queue = [root]
        queue_lr = ['M']

        while len(queue)>0:
                        
            for i in range(len(queue)//2):
                tmp_root1 = queue[i]
                tmp_root2 = queue[-1-i]
                if flipLR[queue_lr[i]]!=queue_lr[-1-i]:
                    return False
                if tmp_root1.val != tmp_root2.val:
                    return False
                if tmp_root1.left:
                    if not tmp_root2.right:
                        return False
                if tmp_root1.right:
                    if not tmp_root2.left:
                        return False
                
            # get new queue
            new_queue = []
            queue_lr = []
            # either left or right has value
            for i in range(len(queue)):
                tmp_root = queue[i]
                if tmp_root.left:
                    new_queue.append(tmp_root.left)
                    queue_lr.append('L')
                if tmp_root.right:
                    new_queue.append(tmp_root.right)
                    queue_lr.append('R')
                    
            if len(new_queue)%2!=0:
                #not symmetric
                return False
            
            queue = new_queue
        return True
