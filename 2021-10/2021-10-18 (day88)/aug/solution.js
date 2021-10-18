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
var findTilt = function (root) {
  function helper(node) {
    if (!node) return 0;
    const leftSum = helper(node.left);
    const rightSum = helper(node.right);
    total += Math.abs(leftSum - rightSum);
    return node.val + leftSum + rightSum;
  }

  let total = 0;
  helper(root);
  return total;
};

/**
 * https://leetcode.com/problems/binary-tree-tilt/
 * 563. Binary Tree Tilt
 *
 * Runtime: 80 ms, faster than 93.98% of JavaScript online submissions for Binary Tree Tilt.
 * Memory Usage: 44.2 MB, less than 32.33% of JavaScript online submissions for Binary Tree Tilt.
 */
