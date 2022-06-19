/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const is_leaf = (node) => !node.left && !node.right;

/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers(root, sum = 0) {
  if (!root) return 0;

  sum += root.val;

  if (is_leaf(root)) {
    return sum;
  }

  return sumNumbers(root.left, sum * 10) + sumNumbers(root.right, sum * 10);
}
