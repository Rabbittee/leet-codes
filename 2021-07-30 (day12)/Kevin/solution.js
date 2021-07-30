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
 * @return {number}
 */
var maxDepth = function (root) {
    let max_depth = 0;
    findDeep(root);
    return max_depth;
    function findDeep(node, prev = 0) {
        let current = prev + 1;
        if (node === null) {
            max_depth = Math.max(current - 1, max_depth);
            return;
        }
        if (node.left === null && node.right === null) {
            max_depth = Math.max(current, max_depth);
            return;
        }
        findDeep(node.left, current);
        findDeep(node.right, current);
    }
};
