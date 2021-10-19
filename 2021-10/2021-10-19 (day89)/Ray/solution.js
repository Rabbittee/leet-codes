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
var isUnivalTree = function(root) {
    let result = true;
    let uniValue = root.val;
    const recursive = (nowNode) => {
        if (nowNode.val !== uniValue) {
            result = false;
            return;
        }
        if (nowNode.left) {
            recursive(nowNode.left);
        }
        if (nowNode.right) {
            recursive(nowNode.right);
        }
    };
    recursive(root);
        
    return result;
};