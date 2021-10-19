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
var isUnivalTree = function (root, val = root.val) {
  if (!root) return true;

  if (root.val !== val) return false;

  return isUnivalTree(root.left, val) && isUnivalTree(root.right, val);
};

/**
 * https://leetcode.com/problems/univalued-binary-tree/
 * 965. Univalued Binary Tree
 *
 * Runtime: 76 ms, faster than 74.05% of JavaScript online submissions for Univalued Binary Tree.
 * Memory Usage: 40 MB, less than 57.63% of JavaScript online submissions for Univalued Binary Tree.
 */
