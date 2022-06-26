/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function traverse(fn, node, level) {
  if (!node) return;
  fn(node.val, level);
  traverse(fn, node.left, level + 1);
  traverse(fn, node.right, level + 1);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  const results = [];
  traverse(
    (val, level) => {
      if (!results[level]) {
        results[level] = [];
      }

      results[level].push(val);
    },
    root,
    0
  );

  return results;
}
