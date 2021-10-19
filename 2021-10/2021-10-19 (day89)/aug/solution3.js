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

  while (queue.length) {
    const node = queue.shift();

    if (node.left) {
      if (node.val !== node.left.val) return false;
      queue.push(node.left);
    }

    if (node.right) {
      if (node.val !== node.right.val) return false;
      queue.push(node.right);
    }
  }

  return true;
};

/**
 * using queue (w/o memorizing root's value)
 *
 * Runtime: 68 ms, faster than 92.75% of JavaScript online submissions for Univalued Binary Tree.
 * Memory Usage: 40.4 MB, less than 17.18% of JavaScript online submissions for Univalued Binary Tree.
 */
