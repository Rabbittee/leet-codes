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
var minDiffInBST = function (root) {
  function helper(node) {
    if (!node) return;

    helper(node.right);

    min = Math.min(min, prev - node.val);
    prev = node.val;

    helper(node.left);
  }

  let min = Infinity;
  let prev = Infinity;
  helper(root);
  return min;
};

/**
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 * 783. Minimum Distance Between BST Nodes
 *
 * Runtime: 80 ms, faster than 71.89% of JavaScript online submissions for Minimum Distance Between BST Nodes.
 * Memory Usage: 40.5 MB, less than 40.00% of JavaScript online submissions for Minimum Distance Between BST Nodes.
 */
