/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function find_height_of(root) {
  if (!root) return 0;

  return Math.max(find_height_of(root.left), find_height_of(root.right)) + 1;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  if (!root) return true;

  return (
    Math.abs(find_height_of(root.left) - find_height_of(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}
