/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root, left, right) {
    if(!root) {
        return true;
    }
    if(left!==undefined && root.val<=left) {
        return false;
    }
    if(right!==undefined && root.val>=right) {
        return false;
    }
    
    return isValidBST(root.left, left, root.val) && isValidBST(root.right, root.val,right);
};