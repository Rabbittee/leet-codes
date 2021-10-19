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
var isUnivalTree = function (root) {
  const queue = [root];
  const val = root.val;

  while (queue.length) {
    const node = queue.shift();
    if (val !== node.val) return false;

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return true;
};

/**
 * using queue (w/ memorizing the very first root's value)
 * in this case, we could use stack as well
 *
 * Runtime: 79 ms, faster than 58.40% of JavaScript online submissions for Univalued Binary Tree.
 * Memory Usage: 40.1 MB, less than 57.63% of JavaScript online submissions for Univalued Binary Tree.
 */
