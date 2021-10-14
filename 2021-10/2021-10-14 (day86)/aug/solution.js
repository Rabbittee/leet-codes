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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const path = [];

  function helper(root, cur = []) {
    cur.push(root.val);
    if (!root.left && !root.right) {
      path.push(cur.join('->'));
    } else {
      root.left && helper(root.left, [...cur]);
      root.right && helper(root.right, [...cur]);
    }
  }

  helper(root);
  return path;
};

/**
 * https://leetcode.com/problems/binary-tree-paths/
 * 257. Binary Tree Paths
 *
 * Runtime: 60 ms, faster than 99.75% of JavaScript online submissions for Binary Tree Paths.
 * Memory Usage: 40.3 MB, less than 32.03% of JavaScript online submissions for Binary Tree Paths.
 */
