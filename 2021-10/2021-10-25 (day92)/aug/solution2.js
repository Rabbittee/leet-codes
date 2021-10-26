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
    helper(node.left);
    arr.push(node.val);
    helper(node.right);
  }

  const arr = [];
  let min = Infinity;
  helper(root);

  arr.sort((a, b) => {
    const diff = a - b;
    min = Math.min(Math.abs(diff), min);
    return diff;
  });

  return min;
};

/**
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 * 783. Minimum Distance Between BST Nodes
 *
 * Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Minimum Distance Between BST Nodes.
 * Memory Usage: 40.8 MB, less than 18.38% of JavaScript online submissions for Minimum Distance Between BST Nodes.
 */
