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
var sumOfLeftLeaves = function (root) {
  let sum = 0;

  function helper(node) {
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    } else {
      node.left && helper(node.left);
    }
    node.right && helper(node.right);
  }

  helper(root);

  return sum;
};

/**
 * https://leetcode.com/problems/sum-of-left-leaves/
 * 404. Sum of Left Leaves
 *
 * Runtime: 80 ms, faster than 63.03% of JavaScript online submissions for Sum of Left Leaves.
 * Memory Usage: 40.9 MB, less than 24.32% of JavaScript online submissions for Sum of Left Leaves.
 */
