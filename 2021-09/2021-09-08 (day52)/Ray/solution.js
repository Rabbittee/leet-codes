/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
    

var buildTree = function(preorder, inorder) {
    
    const diffFunc = (left, right) => {
 
        if (left > right) {
            return null;
        }
        let foundValue = preorder.shift();
        let foundIndex = inorder.indexOf(foundValue);
        
        // center
        let root = new TreeNode(foundValue, undefined, undefined);
        
        // left hand
        // root.left = new root
        root.left = diffFunc(left, foundIndex-1);
        
        // right hand
        // root.right = new root
        root.right = diffFunc(foundIndex+1, right);
            
        return root;
        
    }
    
    const answer = diffFunc(0, inorder.length - 1);
    
    return answer;
 };