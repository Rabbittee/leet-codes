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
  if (!root) return null;

  if (val < root.val) {
    return searchBST(root.left, val);
  } else if (val > root.val) {
    return searchBST(root.right, val);
  }

  return root;
};

/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 * 700. Search in a Binary Search Tree
 *
 * Runtime: 96 ms, faster than 60.83% of JavaScript online submissions for Search in a Binary Search Tree.
 * Memory Usage: 45.4 MB, less than 51.18% of JavaScript online submissions for Search in a Binary Search Tree.
 */
