/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function traverse(fn, node) {
  if (!node) return;

  fn(node.val);
  traverse(fn, node.left);
  traverse(fn, node.right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root, result = []) {
  traverse((val) => result.push(val), root);

  return result;
}
