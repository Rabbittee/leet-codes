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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  while (root && val !== root.val) {
    if (val < root.val) {
      root = root.left;
    } else if (val > root.val) {
      root = root.right;
    }
  }

  return root;
};

/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 * 700. Search in a Binary Search Tree
 *
 * Runtime: 84 ms, faster than 96.46% of JavaScript online submissions for Search in a Binary Search Tree.
 * Memory Usage: 45.6 MB, less than 23.43% of JavaScript online submissions for Search in a Binary Search Tree.
 */
